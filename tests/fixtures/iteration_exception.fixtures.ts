/**
 * This file contains test cases, mocks, or other data for testing the
 * IterationException feature.
 *
 * For use in ../recursion_exception.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'IterationException',
    message: 'An operation exceeded the maximum iteration count.',
    code: 26,
    asString:
      'IterationException [0x1a]: An operation exceeded the maximum iteration count.',
    asValue: 26,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=An%20operation%20exceeded%20the%20maximum%20iteration%20count.`,
  }],
  ['Iteration max count exceeded.', {
    name: 'IterationException',
    message: 'Iteration max count exceeded.',
    code: 26,
    asString: 'IterationException [0x1a]: Iteration max count exceeded.',
    asValue: 26,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=Iteration%20max%20count%20exceeded.`,
  }],
] as const;

const init1 = { operationType: 'request' } as const;
const init2 = { operationName: 'example' } as const;
const init3 = { iterationCount: 5 } as const;
const init4 = { repeatingValue: true } as const;
const init5 = { ...init1, ...init2 } as const;
const init6 = { ...init1, ...init3 } as const;
const init7 = { ...init1, ...init4 } as const;
const init8 = { ...init2, ...init3 } as const;
const init9 = { ...init2, ...init4 } as const;
const init10 = { ...init3, ...init4 } as const;
const init11 = { ...init1, ...init2, ...init3 } as const;
const init12 = { ...init1, ...init2, ...init4 } as const;
const init13 = { ...init1, ...init3, ...init4 } as const;
const init14 = { ...init2, ...init3, ...init4 } as const;
const init15 = { ...init1, ...init2, ...init3, ...init4 } as const;

export const initFixtures = [
  [{}, {
    name: 'IterationException',
    message: 'An operation exceeded the maximum iteration count.',
    code: 26,
    asString:
      'IterationException [0x1a]: An operation exceeded the maximum iteration count.',
    asValue: 26,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=An%20operation%20exceeded%20the%20maximum%20iteration%20count.`,
  }],
  [init1, {
    name: 'IterationException',
    message: 'A request exceeded the maximum iteration count.',
    code: 26,
    asString:
      'IterationException [0x1a]: A request exceeded the maximum iteration count.',
    asValue: 26,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=A%20request%20exceeded%20the%20maximum%20iteration%20count.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'IterationException',
    message: 'The operation "example" exceeded the maximum iteration count.',
    code: 26,
    asString:
      'IterationException [0x1a]: The operation "example" exceeded the maximum iteration count.',
    asValue: 26,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20iteration%20count.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'IterationException',
    message:
      'An operation exceeded the maximum iteration count of 5 iterations.',
    code: 26,
    asString:
      'IterationException [0x1a]: An operation exceeded the maximum iteration count of 5 iterations.',
    asValue: 26,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=An%20operation%20exceeded%20the%20maximum%20recursion%20depth%20of%205%iterations.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
  [init4, {
    name: 'IterationException',
    message:
      'An operation exceeded the maximum iteration count for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: An operation exceeded the maximum iteration count for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init4,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=An%20operation%20exceeded%20the%20maximum%20iteration%20count%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init4))
      }`,
  }],
  [init5, {
    name: 'IterationException',
    message: 'The request "example" exceeded the maximum iteration count.',
    code: 26,
    asString:
      'IterationException [0x1a]: The request "example" exceeded the maximum iteration count.',
    asValue: 26,
    cause: undefined,
    data: init5,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20iteration%20count.&data=${
        encodeURIComponent(JSON.stringify(init5))
      }`,
  }],
  [init6, {
    name: 'IterationException',
    message: 'A request exceeded the maximum iteration count of 5 iterations.',
    code: 26,
    asString:
      'IterationException [0x1a]: A request exceeded the maximum iteration count of 5 iterations.',
    asValue: 26,
    cause: undefined,
    data: init6,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=A%20request%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20iterations.&data=${
        encodeURIComponent(JSON.stringify(init6))
      }`,
  }],
  [init7, {
    name: 'IterationException',
    message:
      'A request exceeded the maximum iteration count for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: A request exceeded the maximum iteration count for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init7,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=A%20request%20exceeded%20the%20maximum%20iteration%20count%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init7))
      }`,
  }],
  [init8, {
    name: 'IterationException',
    message:
      'The operation "example" exceeded the maximum iteration count of 5 iterations.',
    code: 26,
    asString:
      'IterationException [0x1a]: The operation "example" exceeded the maximum iteration count of 5 iterations.',
    asValue: 26,
    cause: undefined,
    data: init8,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20iterations.&data=${
        encodeURIComponent(JSON.stringify(init8))
      }`,
  }],
  [init9, {
    name: 'IterationException',
    message:
      'The operation "example" exceeded the maximum iteration count for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: The operation "example" exceeded the maximum iteration count for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init9,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20iteration%20count%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init9))
      }`,
  }],
  [init10, {
    name: 'IterationException',
    message:
      'An operation exceeded the maximum iteration count of 5 for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: An operation exceeded the maximum iteration count of 5 for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init10,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=An%20operation%20exceeded%20the%20maximum%20iteration%20count%20of%205%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init10))
      }`,
  }],
  [init11, {
    name: 'IterationException',
    message:
      'The request "example" exceeded the maximum iteration count of 5 iterations.',
    code: 26,
    asString:
      'IterationException [0x1a]: The request "example" exceeded the maximum iteration count of 5 iterations.',
    asValue: 26,
    cause: undefined,
    data: init11,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20recursion%20depth%20of%205%20iterations.&data=${
        encodeURIComponent(JSON.stringify(init11))
      }`,
  }],
  [init12, {
    name: 'IterationException',
    message:
      'The request "example" exceeded the maximum iteration count for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: The request "example" exceeded the maximum iteration count for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init12,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20iteration%20count%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init12))
      }`,
  }],
  [init13, {
    name: 'IterationException',
    message:
      'Arequest exceeded the maximum iteration count of 5 for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: Arequest exceeded the maximum iteration count of 5 for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init13,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=Arequest%20exceeded%20the%20maximum%20iteration%20count%20of%205%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init13))
      }`,
  }],
  [init14, {
    name: 'IterationException',
    message:
      'The operation "example" exceeded the maximum iteration count of 5 for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: The operation "example" exceeded the maximum iteration count of 5 for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init14,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20operation%20%22example%22%20exceeded%20the%20maximum%20iteration%20count%20of%205%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init14))
      }`,
  }],
  [init15, {
    name: 'IterationException',
    message:
      'The request "example" exceeded the maximum iteration count of 5 for consecutive repeating values.',
    code: 26,
    asString:
      'IterationException [0x1a]: The request "example" exceeded the maximum iteration count of 5 for consecutive repeating values.',
    asValue: 26,
    cause: undefined,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=The%20request%20%22example%22%20exceeded%20the%20maximum%20iteration%20count%20of%205%20for%20consecutive%20repeating%20values.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }`,
  }],
] as const;

const cause0 = new Error('Iteration max count exceeded.');

export const messageCauseFixtures = [
  ['Iteration max count exceeded.', cause0, {
    name: 'IterationException',
    message: 'Iteration max count exceeded.',
    code: 26,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=Iteration%20max%20count%20exceeded.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['Iteration max count exceeded.', init15, {
    name: 'IterationException',
    message: 'Iteration max count exceeded.',
    code: 26,
    cause: undefined,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=Iteration%20max%20count%20exceeded.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['Iteration max count exceeded.', { ...init15, cause: cause0 }, {
    name: 'IterationException',
    message: 'Iteration max count exceeded.',
    code: 26,
    cause: cause0,
    data: init15,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0x1a?message=Iteration%20max%20count%20exceeded.&data=${
        encodeURIComponent(JSON.stringify(init15))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
