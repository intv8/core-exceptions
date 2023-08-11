/**
 * This file exports the InvalidException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { Exception } from './exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the InvalidException exception. */
export type InvalidExceptionInit = BaseExceptionInit;

/** An exception raised during invalid operations. */
export class InvalidException<
  T extends InvalidExceptionInit = InvalidExceptionInit,
> extends Exception<T> {
  /** Creates a new InvalidException exception with the provided message, optionally with additional InvalidExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the InvalidException exception. */
  public code = 0xa;
}
