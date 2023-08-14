/**
 * This file exports the ParseException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { FormatException } from './format_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

//  Import parser type
import { Parser } from '../../deps.ts';

/** The default message for the {@link ParseException} exception. */
const DEFAULT_MESSAGE = 'A parser was unable to parse content.';

/** The exception init properties for the {@link ParseException} exception. */
export type ParseExceptionInit = BaseExceptionInit<{
  parser?: Parser;
}>;

/** Creates a message from the provided {@link ParseExceptionInit} properties. */
function createMsgFromInit(init: ParseExceptionInit): string {
  const { parser } = init;

  switch (true) {
    case (!!parser):
      return `The parser "${parser}" was unable to parse content.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a parser fails to parse content. */
export class ParseException<T extends ParseExceptionInit = ParseExceptionInit>
  extends FormatException<T> {
  /** Creates a new {@link ParseException} exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new {@link ParseException} exception with a message created from the provided {@link ParseExceptionInit} properties. */
  constructor(init: T);

  /** Creates a new {@link ParseException} exception with the provided message, optionally with additional {@link ParseExceptionInit} properties. */
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

  /** The exception code for the {@link ParseException} exception. */
  public code = 0x10;
}
