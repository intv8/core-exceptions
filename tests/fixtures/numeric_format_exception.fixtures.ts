/**
 * This file contains test cases, mocks, or other data for testing the
 * NumericFormatException feature.
 *
 * For use in ../numeric_format_exception.test.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../../src/_internals/mod.ts';

export const messageFixtures = [
  ['', {
    name: 'NumericFormatException',
    message: 'An expression for a numeric formatter is invalid.',
    code: 14,
    asString:
      'NumericFormatException [0xe]: An expression for a numeric formatter is invalid.',
    asValue: 14,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=An%20expression%20for%20a%20numeric%20formatter%20is%20invalid.`,
  }],
  ['The expression is invalid for this formatter.', {
    name: 'NumericFormatException',
    message: 'The expression is invalid for this formatter.',
    code: 14,
    asString:
      'NumericFormatException [0xe]: The expression is invalid for this formatter.',
    asValue: 14,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=The%20expression%20is%20invalid%20for%20this%20formatter.`,
  }],
] as const;

const init1 = { formatter: 'datetime' } as const;
const init2 = { formatExpression: 'MM/dX/yX' } as const;
const init3 = { ...init1, ...init2 } as const;

export const initFixtures = [
  [{}, {
    name: 'NumericFormatException',
    message: 'An expression for a numeric formatter is invalid.',
    code: 14,
    asString:
      'NumericFormatException [0xe]: An expression for a numeric formatter is invalid.',
    asValue: 14,
    cause: undefined,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=An%20expression%20for%20a%20numeric%20formatter%20is%20invalid.`,
  }],
  [init1, {
    name: 'NumericFormatException',
    message: 'An expression for the numeric formatter "datetime" is invalid.',
    code: 14,
    asString:
      'NumericFormatException [0xe]: An expression for the numeric formatter "datetime" is invalid.',
    asValue: 14,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=An%20expression%20for%20the%20numeric%20formatter%20%22datetime%22%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
  [init2, {
    name: 'NumericFormatException',
    message:
      'The following expression is invalid for a numeric formatter: "MM/dX/yX".',
    code: 14,
    asString:
      'NumericFormatException [0xe]: The following expression is invalid for a numeric formatter: "MM/dX/yX".',
    asValue: 14,
    cause: undefined,
    data: init2,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=The%20following%20expression%20is%20invalid%20for%20a%20numeric%20formatter%3A%20%22MM%2FdX%2FyX%22.&data=${
        encodeURIComponent(JSON.stringify(init2))
      }`,
  }],
  [init3, {
    name: 'NumericFormatException',
    message:
      'The following expression is invalid for the numeric formatter "datetime": "MM/dX/yX".',
    code: 14,
    asString:
      'NumericFormatException [0xe]: The following expression is invalid for the numeric formatter "datetime": "MM/dX/yX".',
    asValue: 14,
    cause: undefined,
    data: init3,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=The%20following%20expression%20is%20invalid%20for%20the%20numeric%20formatter%20%22datetime%22%3A%20%22MM%2FdX%2FyX%22.&data=${
        encodeURIComponent(JSON.stringify(init3))
      }`,
  }],
] as const;

const cause0 = new Error('A format expression is invalid.');

export const messageCauseFixtures = [
  ['A format expression is invalid.', cause0, {
    name: 'NumericFormatException',
    message: 'A format expression is invalid.',
    code: 14,
    cause: cause0,
    data: undefined,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=A%20format%20expression%20is%20invalid.&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;

export const messageDataFixtures = [
  ['A format expression is invalid.', init1, {
    name: 'NumericFormatException',
    message: 'A format expression is invalid.',
    code: 14,
    cause: undefined,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=A%20format%20expression%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }`,
  }],
] as const;

export const messageDataCauseFixtures = [
  ['A format expression is invalid.', { ...init1, cause: cause0 }, {
    name: 'NumericFormatException',
    message: 'A format expression is invalid.',
    code: 14,
    cause: cause0,
    data: init1,
    helpUrl:
      `${I11N_EX2_HOST}${I11N_EX2_PATH}/0xe?message=A%20format%20expression%20is%20invalid.&data=${
        encodeURIComponent(JSON.stringify(init1))
      }&cause=${
        encodeURIComponent(
          JSON.stringify({ name: 'Error', message: cause0.message }),
        )
      }`,
  }],
] as const;
