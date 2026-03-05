"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _globals = require("@jest/globals");
var _getNumberValue = _interopRequireDefault(require("../getNumberValue"));
(0, _globals.describe)('getNumberValue', () => {
  const fn = _getNumberValue.default;
  (0, _globals.test)('should return tuple false tuple for "-" and "" cases', () => {
    (0, _globals.expect)(fn('-', -10, 10)).toEqual(['-', false]);
    (0, _globals.expect)(fn('-', 0, 100)).toEqual(['-', false]);
    (0, _globals.expect)(fn('', -10, 10)).toEqual(['', false]);
    (0, _globals.expect)(fn('', 0, 100)).toEqual(['', false]);
  });
  (0, _globals.test)('should return tuple true for numbers cases', () => {
    (0, _globals.expect)(fn(1, -100, 100)).toEqual([1, true]);
    (0, _globals.expect)(fn('1', -100, 100)).toEqual([1, true]);
    (0, _globals.expect)(fn(-1, -100, 100)).toEqual([-1, true]);
    (0, _globals.expect)(fn('-1', -100, 100)).toEqual([-1, true]);
    (0, _globals.expect)(fn(10, -100, 100)).toEqual([10, true]);
    (0, _globals.expect)(fn('10', -100, 100)).toEqual([10, true]);
    (0, _globals.expect)(fn(-10, -100, 100)).toEqual([-10, true]);
    (0, _globals.expect)(fn('-10', -100, 100)).toEqual([-10, true]);
    (0, _globals.expect)(fn(0.1, -1, 1)).toEqual([0.1, true]);
    (0, _globals.expect)(fn('0.1', -1, 1)).toEqual([0.1, true]);
    (0, _globals.expect)(fn(-0.1, -1, 1)).toEqual([-0.1, true]);
    (0, _globals.expect)(fn('-0.1', -1, 1)).toEqual([-0.1, true]);
  });
  (0, _globals.test)('should return true tuple for exponential notation case', () => {
    (0, _globals.expect)(fn('1e+1', -100, 100)).toEqual([10, true]);
    (0, _globals.expect)(fn('-1e+1', -100, 100)).toEqual([-10, true]);
    (0, _globals.expect)(fn('1e-1', -100, 100)).toEqual([0.1, true]);
    (0, _globals.expect)(fn('-1e-1', -100, 100)).toEqual([-0.1, true]);
  });
  (0, _globals.test)('should range value by min-max', () => {
    (0, _globals.expect)(fn(12, -10, 10)).toEqual([10, true]);
    (0, _globals.expect)(fn('12', -10, 10)).toEqual([10, true]);
    (0, _globals.expect)(fn(-12, -10, 10)).toEqual([-10, true]);
    (0, _globals.expect)(fn('-12', -10, 10)).toEqual([-10, true]);
    (0, _globals.expect)(fn('1e+1', -1, 1)).toEqual([1, true]);
    (0, _globals.expect)(fn('-1e+1', -1, 1)).toEqual([-1, true]);
  });
  (0, _globals.test)('should return tuple true with min for all edge cases', () => {
    (0, _globals.expect)(fn('ab', 0, 10)).toEqual([0, true]);
    (0, _globals.expect)(fn('a1e+1', 0, 10)).toEqual([0, true]);
    (0, _globals.expect)(fn(null, 0, 10)).toEqual([0, true]);
    (0, _globals.expect)(fn(void 0, 0, 10)).toEqual([0, true]);
    (0, _globals.expect)(fn({}, 0, 10)).toEqual([0, true]);
  });
});