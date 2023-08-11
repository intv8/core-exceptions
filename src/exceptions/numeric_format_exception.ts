/**
 * This file exports the NumericFormatException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { FormatException } from './format_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

//  Import numeric format type
import type { NumericFormat } from '../../deps.ts';

/** The default message for the NumericFormatException exception. */
const DEFAULT_MESSAGE = 'An expression for a numeric formatter is invalid.';

/** The exception init properties for the NumericFormatException exception. */
export type NumericFormatExceptionInit = BaseExceptionInit<{
  /** The type of formatter for which format expression is invalid. */
  formatter?: NumericFormat;

  /** The format expression that is invalid. */
  formatExpression?: string;
}>;

/** Creates a message from the provided NumericFormatExceptionInit properties. */
function createMsgFromInit(init: NumericFormatExceptionInit): string {
  const { formatter, formatExpression } = init;

  switch (true) {
    case (!!formatter && !!formatExpression):
      return `The following expression is invalid for the numeric formatter "${formatter}": "${formatExpression}".`;
    case (!!formatExpression):
      return `The following expression is invalid for a numeric formatter: "${formatExpression}".`;
    case (!!formatter):
      return `An expression for the numeric formatter "${formatter}" is invalid.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when a numeric format expression is invalid. */
export class NumericFormatException<
  T extends NumericFormatExceptionInit = NumericFormatExceptionInit,
> extends FormatException<T> {
  /** Creates a new NumericFormatException exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new NumericFormatException exception with a message created from the provided NumericFormatExceptionInit properties. */
  constructor(init: T);

  /** Creates a new NumericFormatException exception with the provided message, optionally with additional NumericFormatExceptionInit properties. */
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

  /** The exception code for the NumericFormatException exception. */
  public code = 0xe;
}
