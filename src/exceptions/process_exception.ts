/**
 * This file exports the ProcessException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSException } from './os_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the ProcessException exception. */
export type ProcessExceptionInit = BaseExceptionInit;

/** An exception raised when a process is in an unexpected state. */
export class ProcessException<
  T extends ProcessExceptionInit = ProcessExceptionInit,
> extends OSException<T> {
  /** Creates a new ProcessException exception with the provided message, optionally with additional ProcessExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the ProcessException exception. */
  public code = 0x6;
}
