/**
 * This file exports the DiskException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { OSException } from './os_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the DiskException exception. */
export type DiskExceptionInit = BaseExceptionInit;

/** An exception raised when an operation encounters disk issues. */
export class DiskException<T extends DiskExceptionInit = DiskExceptionInit>
  extends OSException<T> {
  /** Creates a new DiskException exception with the provided message, optionally with additional DiskExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the DiskException exception. */
  public code = 0x5;
}