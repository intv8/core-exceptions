/**
 * This file contains test cases, mocks, or other data for testing the
 * ParseException feature.
 *
 * For use in ../parse_exception.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'ParseException',
    message: 'A parser was unable to parse content.',
    code: 16,
    asString: 'ParseException [0x10]: A parser was unable to parse content.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20parser%20was%20unable%20to%20parse%20content.`,
  }],
  ['A parser is unable to parse content.', {
    name: 'ParseException',
    message: 'A parser is unable to parse content.',
    code: 16,
    asString: 'ParseException [0x10]: A parser is unable to parse content.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20parser%20is%20unable%20to%20parse%20content.`,
  }],
] as const;

const init1 = { parser: 'json' } as const;

export const initFixtures = [
  [{}, {
    name: 'ParseException',
    message: 'A parser was unable to parse content.',
    code: 16,
    asString: 'ParseException [0x10]: A parser was unable to parse content.',
    asValue: 16,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=A%20parser%20was%20unable%20to%20parse%20content.`,
  }],
  [init1, {
    name: 'ParseException',
    message: 'The parser "json" was unable to parse content.',
    code: 16,
    asString:
      'ParseException [0x10]: The parser "json" was unable to parse content.',
    asValue: 16,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=The%20parser%20%22json%22%20was%20unable%20to%20parse%20content.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

const cause0 = new Error('Unable to parse content.');

export const messageCauseFixtures = [
  ['Unable to parse content.', cause0, {
    name: 'ParseException',
    message: 'Unable to parse content.',
    code: 16,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Unable%20to%20parse%20content.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Unable to parse content.', init1, {
    name: 'ParseException',
    message: 'Unable to parse content.',
    code: 16,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Unable%20to%20parse%20content.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Unable to parse content.', { ...init1, cause: cause0 }, {
    name: 'ParseException',
    message: 'Unable to parse content.',
    code: 16,
    cause: cause0,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x10?message=Unable%20to%20parse%20content.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
