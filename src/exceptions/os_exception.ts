/**
 * This file exports the OSException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { Exception } from './exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the OSException exception. */
export type OSExceptionInit = BaseExceptionInit;

/** The base exception for OS related exceptions. */
export class OSException<T extends OSExceptionInit = OSExceptionInit>
  extends Exception<T> {
  /** Creates a new OSException exception with the provided message, optionally with additional OSExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the OSException exception. */
  public code = 0x1;
}
