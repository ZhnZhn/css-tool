import { rs } from '@rstest/core';

export { describe, expect, test } from '@rstest/core'

export const crTestFn = (fn) => rs.fn(fn)