/**
 * This file exports the MemoryException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSException } from './os_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the MemoryException exception. */
export type MemoryExceptionInit = BaseExceptionInit;

/** An exception raised when an operation encounters memory issues, but may be recoverable. */
export class MemoryException<
  T extends MemoryExceptionInit = MemoryExceptionInit,
> extends OSException<T> {
  /** Creates a new MemoryException exception with the provided message, optionally with additional MemoryExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the MemoryException exception. */
  public code = 0x4;
}
