/**
 * This file exports the Exception exception and related features.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

import { I11N_EX2_HOST, I11N_EX2_PATH } from '../_internals/mod.ts';

import type { BaseExceptionInit } from '../types/types.ts';

// deno-lint-ignore no-explicit-any
export type ExceptionInit = BaseExceptionInit<{ [key: string]: any }>;

/** A generic exception from which all exceptions are derived. MUST only be used for testing. Otherwise, use a different exception or create a new derived exception. */
export class Exception<T extends ExceptionInit = ExceptionInit> extends Error {
  /** Creates a new exception with the provided `message` and exception `init` properties. */
  constructor(message?: string, protected init?: T) {
    super(message);
  }

  /** The exception code for the {@link Exception} exception. */
  public code = 0;

  /** The exception name for the {@link Exception} exception. */
  public readonly name = this.constructor.name;

  /** The inner cause of the {@link Exception}. */
  public get cause(): Error | Exception | undefined {
    const { cause } = this.init ?? {};

    return cause;
  }

  /** The exception init data for the {@link Exception}. */
  public get data(): Omit<T, 'cause'> | undefined {
    const { init } = this;

    if (!init) return void 0;

    const { cause: _, ...data } = init;
    const hasData = Object.keys(data).length > 0;

    return hasData ? data : undefined;
  }

  /** Returns the exception help url for the {@link Exception}. */
  public get helpUrl(): string {
    const { message } = this;
    const host = this.getHelpUrlHost();
    const path = this.getHelpUrlPath();
    const msg = encodeURIComponent(message);
    const encodedData = this.getUrlEncodedData();
    const encodedCause = this.getUrlEncodedCause();
    const dataQueryString = encodedData ? `&data=${encodedData}` : '';
    const causeQueryString = encodedCause ? `&cause=${encodedCause}` : '';

    return `${host}${path}?message=${msg}${dataQueryString}${causeQueryString}`;
  }

  /** Returns the string representation of the {@link Exception}. */
  public override toString(): string {
    const { name, code, message } = this;

    return `${name} [0x${code.toString(16)}]: ${message}`;
  }

  /** Returns the numeric representation of the {@link Exception}. */
  public override valueOf(): number {
    return this.code;
  }

  /** Returns the host for the exception explainer tool. */
  protected getHelpUrlHost(): string {
    return I11N_EX2_HOST;
  }

  /** Returns the path for the exception explainer tool. */
  protected getHelpUrlPath(): string {
    const { code } = this;
    const hex = code.toString(16);

    return `${I11N_EX2_PATH}/0x${hex}`;
  }

  /** Returns URL encoded JSON-stringified data. */
  protected getUrlEncodedData(): string {
    const { data } = this;

    if (!data) {
      return '';
    }

    const { cause: _cause, ...other } = data;

    if (!Object.keys(other).length) {
      return '';
    }

    return encodeURIComponent(JSON.stringify(other));
  }

  /** Returns URL encoded JSON-stringified cause. */
  protected getUrlEncodedCause(): string {
    const { cause } = this;

    if (!cause) {
      return '';
    }

    const data: Partial<Omit<Exception, 'valueOf'>> = {
      name: cause.name,
      message: cause.message,
    };

    const payload = (cause as Exception).helpUrl
      ? {
        ...data,
        helpUrl: (cause as Exception).helpUrl,
      }
      : data;

    return encodeURIComponent(JSON.stringify(payload));
  }
}
