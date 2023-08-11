/**
 * This file exports the AbortedException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { InterruptException } from './interrupt_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

/** The exception init properties for the AbortedException exception. */
export type AbortedExceptionInit = BaseExceptionInit;

/** An exception raised when an operation is aborted. */
export class AbortedException<
  T extends AbortedExceptionInit = AbortedExceptionInit,
> extends InterruptException<T> {
  /** Creates a new AbortedException exception with the provided message, optionally with additional AbortedExceptionInit properties. */
  constructor(message: string, init?: T) {
    super(message, init);
  }

  /** The exception code for the AbortedException exception. */
  public code = 0x3;
}