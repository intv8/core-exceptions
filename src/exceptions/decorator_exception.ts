/**
 * This file exports the DecoratorException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { ValueException } from './value_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

//  Import decorator type
import type { DecoratorTarget } from '../../deps.ts';

/** The default message for the {@link DecoratorException} exception. */
const DEFAULT_MESSAGE = 'A decorator failed to apply.';

/** The exception init properties for the {@link DecoratorException} exception. */
export type DecoratorExceptionInit = BaseExceptionInit<{
  /** The type of decorator that failed to apply. */
  decoratorTarget?: DecoratorTarget;

  /** The name of the decorator that failed to apply. */
  decoratorName?: string;
}>;

/** Creates a message from the provided {@link DecoratorExceptionInit} properties. */
function createMsgFromInit(init: DecoratorExceptionInit): string {
  const { decoratorTarget, decoratorName } = init;
  const conj =
    decoratorTarget && 'aeiou'.includes(decoratorTarget[0].toLowerCase())
      ? 'An'
      : 'A';

  switch (true) {
    case (!!decoratorTarget && !!decoratorName):
      return `The ${decoratorTarget} decorator "${decoratorName}" failed to apply.`;
    case (!!decoratorTarget):
      return `${conj} ${decoratorTarget} decorator failed to apply.`;
    case (!!decoratorName):
      return `The decorator "${decoratorName}" failed to apply.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a decorator fails to apply. */
export class DecoratorException<
  T extends DecoratorExceptionInit = DecoratorExceptionInit,
> extends ValueException<T> {
  /** Creates a new {@link DecoratorException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link DecoratorException} exception with a message created from the provided {@link DecoratorExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link DecoratorException} exception with the provided message, optionally with additional {@link DecoratorExceptionInit} properties. */
  constructor(message: string, init?: T);

  //  Constructor overload implementation
  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the {@link DecoratorException} exception. */
  public code = 0x11;
}
