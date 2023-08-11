/**
 * This file exports exceptions used by the the partic11e core-exceptions package
 * and its peer and dependant packages.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//  Export base exception and features
export { Exception, type ExceptionInit } from './exception.ts';

//  Export exception OSException and related features.
export { OSException, type OSExceptionInit } from './os_exception.ts';

//  Export exception InterruptException and related features.
export {
  InterruptException,
  type InterruptExceptionInit,
} from './interrupt_exception.ts';

//  Export exception AbortedException and related features.
export {
  AbortedException,
  type AbortedExceptionInit,
} from './aborted_exception.ts';

//  Export exception MemoryException and related features.
export {
  MemoryException,
  type MemoryExceptionInit,
} from './memory_exception.ts';

//  Export exception DiskException and related features.
export { DiskException, type DiskExceptionInit } from './disk_exception.ts';

//  Export exception ProcessException and related features.
export {
  ProcessException,
  type ProcessExceptionInit,
} from './process_exception.ts';

//  Export exception ConnectionException and related features.
export {
  ConnectionException,
  type ConnectionExceptionInit,
} from './connection_exception.ts';

//  Export exception AssertionException and related features.
export {
  AssertionException,
  type AssertionExceptionInit,
} from './assertion_exception.ts';

//  Export exception InvalidException and related features.
export {
  InvalidException,
  type InvalidExceptionInit,
} from './invalid_exception.ts';

//  Export exception NotSupportedException and related features.
export {
  NotSupportedException,
  type NotSupportedExceptionInit,
} from './not_supported_exception.ts';

//  Export exception FormatException and related features.
export {
  FormatException,
  type FormatExceptionInit,
} from './format_exception.ts';

//  Export exception ValueException and related features.
export { ValueException, type ValueExceptionInit } from './value_exception.ts';

//  Export exception NotFoundException and related features.
export {
  NotFoundException,
  type NotFoundExceptionInit,
} from './not_found_exception.ts';

//  Export exception ExternalException and related features.
export {
  ExternalException,
  type ExternalExceptionInit,
} from './external_exception.ts';

//  Export exception NotImplementedException and related features.
export {
  NotImplementedException,
  type NotImplementedExceptionInit,
} from './not_implemented_exception.ts';

//  Export exception NumericFormatException and related features.
export {
  NumericFormatException,
  type NumericFormatExceptionInit,
} from './numeric_format_exception.ts';

//  Export exception ParseException and related features.
export { ParseException, type ParseExceptionInit } from './parse_exception.ts';

//  Export exception DecoratorException and related features.
export {
  DecoratorException,
  type DecoratorExceptionInit,
} from './decorator_exception.ts';

//  Export exception RangeException and related features.
export { RangeException, type RangeExceptionInit } from './range_exception.ts';

//  Export exception IndexException and related features.
export { IndexException, type IndexExceptionInit } from './index_exception.ts';

//  Export exception KeyException and related features.
export { KeyException, type KeyExceptionInit } from './key_exception.ts';

//  Export exception MethodException and related features.
export {
  MethodException,
  type MethodExceptionInit,
} from './method_exception.ts';

//  Export exception ArgumentException and related features.
export {
  ArgumentException,
  type ArgumentExceptionInit,
} from './argument_exception.ts';

//  Export exception ArgumentIndexException and related features.
export {
  ArgumentIndexException,
  type ArgumentIndexExceptionInit,
} from './argument_index_exception.ts';

//  Export exception RecursionException and related features.
export {
  RecursionException,
  type RecursionExceptionInit,
} from './recursion_exception.ts';

//  Export exception IterationException and related features.
export {
  IterationException,
  type IterationExceptionInit,
} from './iteration_exception.ts';

//  Export exception TimeoutException and related features.
export {
  TimeoutException,
  type TimeoutExceptionInit,
} from './timeout_exception.ts';
