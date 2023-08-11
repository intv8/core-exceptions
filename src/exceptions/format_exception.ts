/**
 * This file exports the FormatException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { InvalidException } from './invalid_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the FormatException exception. */
export type FormatExceptionInit = BaseExceptionInit;

/** An exception raised when an assertion is incorrect. */
export class FormatException<
  T extends FormatExceptionInit = FormatExceptionInit,
> extends InvalidException<T> {
  /** Creates a new FormatException exception with the provided message, optionally with additional FormatExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the FormatException exception. */
  public code = 0xd;
}
