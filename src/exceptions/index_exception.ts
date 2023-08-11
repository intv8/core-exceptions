/**
 * This file exports the IndexException exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Import base exception
import { RangeException } from './range_exception.ts';

//  Import exception init type
import type { BaseExceptionInit } from '../types/types.ts';

//  validates bounds
import { validateBounds } from '../_internals/validate_bounds.ts';

/** The default message for the IndexException exception. */
const DEFAULT_MESSAGE = 'An index is outside the bounds of an array.';

/** The exception init properties for the IndexException exception. */
export type IndexExceptionInit = BaseExceptionInit<{
  /** The index that is outside the array index range. */
  index?: number;

  /** The name of the array. */
  valueName?: string;

  /** The upper bounds, inclusive, of the array index range. Usually length - 1. */
  upperBound?: number;
}>;

/** Creates a message from the provided IndexExceptionInit properties. */
function createMsgFromInit(init: IndexExceptionInit): string {
  const { index, valueName, upperBound } = init;

  switch (true) {
    case (typeof index === 'number' && !!valueName &&
      typeof upperBound === 'number'):
      return `The index ${index} is outside the bounds of the array "${valueName}". It must be 0, ${upperBound}, or between them.`;
    case (!!valueName && typeof upperBound === 'number'):
      return `An index is outside the bounds of the array "${valueName}". It must be 0, ${upperBound}, or between them.`;
    case (typeof index === 'number' && typeof upperBound === 'number'):
      return `The index ${index} is outside the bounds of an array. It must be 0, ${upperBound}, or between them.`;
    case (typeof index === 'number' && !!valueName):
      return `The index ${index} is outside the bounds of the array "${valueName}".`;
    case (typeof upperBound === 'number'):
      return `An index is outside the bounds of an array. It must be 0, ${upperBound}, or between them.`;
    case (!!valueName):
      return `An index is outside of the bounds of the array "${valueName}".`;
    case (typeof index === 'number'):
      return `The index ${index} is outside the bounds of an array.`;
    default:
      return DEFAULT_MESSAGE;
  }
}

/** An exception raised when an index is outside the bounds of an array. */
export class IndexException<T extends IndexExceptionInit = IndexExceptionInit>
  extends RangeException<T> {
  /** Creates a new IndexException exception with the default message and no exception init properties. */
  constructor();

  /** Creates a new IndexException exception with a message created from the provided IndexExceptionInit properties. */
  constructor(init: T);

  /** Creates a new IndexException exception with the provided message, optionally with additional IndexExceptionInit properties. */
  constructor(message: string, init?: T);

  //  Constructor overload implementation
  // deno-lint-ignore default-param-last
  constructor(msgOrInit: string | T = DEFAULT_MESSAGE, maybeInit?: T) {
    let message: string = msgOrInit as string;
    let init: T | undefined = maybeInit;

    if (typeof msgOrInit !== 'string') {
      init = msgOrInit;
      message = createMsgFromInit(init);
    }

    validateBounds(0, init?.upperBound); //  probably not needed

    super(message ? message : DEFAULT_MESSAGE, init);
  }

  /** The exception code for the IndexException exception. */
  public code = 0x14;
}
