/**
 * This file contains test cases for testing that exception and warning codes are unique.
 *
 * For use in ../unique_codes.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import {
  AbortedException,
  ArgumentException,
  ArgumentIndexException,
  AssertionException,
  ConnectionException,
  DecoratorException,
  DiskException,
  Exception,
  ExternalException,
  FormatException,
  IndexException,
  InterruptException,
  InvalidException,
  IterationException,
  KeyException,
  MemoryException,
  MethodException,
  NotFoundException,
  NotImplementedException,
  NotSupportedException,
  NumericFormatException,
  OSException,
  ParseException,
  ProcessException,
  RangeException,
  RecursionException,
  TimeoutException,
  ValueException,
} from '../../mod.ts';

const allInstances = [
  new Exception('Test message'),
  new AbortedException('Test message'),
  new ArgumentException('Test message'),
  new ArgumentIndexException('Test message'),
  new AssertionException('Test message'),
  new ConnectionException('Test message'),
  new DecoratorException('Test message'),
  new DiskException('Test message'),
  new ExternalException('Test message'),
  new FormatException('Test message'),
  new IndexException('Test message'),
  new InterruptException('Test message'),
  new InvalidException('Test message'),
  new IterationException('Test message'),
  new KeyException('Test message'),
  new MemoryException('Test message'),
  new MethodException('Test message'),
  new NotFoundException('Test message'),
  new NotImplementedException('Test message'),
  new NotSupportedException('Test message'),
  new NumericFormatException('Test message'),
  new OSException('Test message'),
  new ParseException('Test message'),
  new ProcessException('Test message'),
  new RangeException('Test message'),
  new RecursionException('Test message'),
  new TimeoutException('Test message'),
  new ValueException('Test message'),
];

export const allCodesFixture = allInstances.map((instance) => instance.code);
