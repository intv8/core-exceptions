/**
 * This file exports the ValueException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { InvalidException } from './invalid_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the ValueException exception. */
export type ValueExceptionInit = BaseExceptionInit;

/** An exception raised when a value has the correct type and is invalid, or other applications of invalid value. */
export class ValueException<T extends ValueExceptionInit = ValueExceptionInit>
  extends InvalidException<T> {
  /** Creates a new ValueException exception with the provided message, optionally with additional ValueExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the ValueException exception. */
  public code = 0xf;
}
