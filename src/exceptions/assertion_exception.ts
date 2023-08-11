/**
 * This file exports the AssertionException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { Exception } from './exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the AssertionException exception. */
export type AssertionExceptionInit = BaseExceptionInit;

/** An exception raised when an assertion is incorrect. */
export class AssertionException<
  T extends AssertionExceptionInit = AssertionExceptionInit,
> extends Exception<T> {
  /** Creates a new AssertionException exception with the provided message, optionally with additional AssertionExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the AssertionException exception. */
  public code = 0x8;
}
