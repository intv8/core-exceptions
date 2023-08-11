/**
 * This file exports the NotFoundException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { ValueException } from './value_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the NotFoundException exception. */
export type NotFoundExceptionInit = BaseExceptionInit;

/** An exception raised when an requested item is not found. */
export class NotFoundException<
  T extends NotFoundExceptionInit = NotFoundExceptionInit,
> extends ValueException<T> {
  /** Creates a new NotFoundException exception with the provided message, optionally with additional NotFoundExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the NotFoundException exception. */
  public code = 0x13;
}
