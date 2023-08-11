/**
 * This file exports type aliases used by the the partic11e core-exceptions package
 * and its peer and dependant packages.
 *
 * For type aliases, see ./interfaces.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { AnonymousObject } from '../../deps.ts';

export type CommonExceptionInit = AnonymousObject & {
  cause?: Error; // | Exception;
};

export type BaseExceptionInit<T extends AnonymousObject = AnonymousObject> =
  & CommonExceptionInit
  & T;
