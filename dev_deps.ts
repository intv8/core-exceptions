/**
 * This file re-exports external development dependencies used by the intv8
 * core-exceptions package.
 *
 * @copyright 2022 integereleven. All rights reserved. MIT license.
 */

export {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  it,
} from 'https://deno.land/std@0.203.0/testing/bdd.ts';

export {
  assert,
  assertEquals,
  assertThrows,
  unimplemented,
} from 'https://deno.land/std@0.203.0/assert/mod.ts';
