/**
 * This file exports the InterruptException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSException } from './os_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the InterruptException exception. */
export type InterruptExceptionInit = BaseExceptionInit;

/** An exception raised when an operation is interrupted. */
export class InterruptException<
  T extends InterruptExceptionInit = InterruptExceptionInit,
> extends OSException<T> {
  /** Creates a new InterruptException exception with the provided message, optionally with additional InterruptExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the InterruptException exception. */
  public code = 0x2;
}
