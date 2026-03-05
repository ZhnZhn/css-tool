"use strict";

var _globals = require("@jest/globals");
var _math = require("../math");
(0, _globals.describe)('round10', () => {
  const fn = _math.round10;
  (0, _globals.test)('should return rounded value by string args', () => {
    (0, _globals.expect)(fn('10.4444', '0')).toBe(10);
    (0, _globals.expect)(fn('10.5555', '0')).toBe(11);
  });
  (0, _globals.test)('should return rounded value by number args', () => {
    (0, _globals.expect)(fn(10.4444, 0)).toBe(10);
    (0, _globals.expect)(fn(10.5555, 0)).toBe(11);
  });
  (0, _globals.test)('should return rounded value by string and number args', () => {
    (0, _globals.expect)(fn('10.4444', 0)).toBe(10);
    (0, _globals.expect)(fn(10.5555, '0')).toBe(11);
  });
  (0, _globals.test)('should return rounded value by exponential string args', () => {
    (0, _globals.expect)(fn('1.04444e+1', 0)).toBe(10);
    (0, _globals.expect)(fn('1.04444e+1', '0')).toBe(10);
    (0, _globals.expect)(fn('1.05555e+1', 0)).toBe(11);
    (0, _globals.expect)(fn('1.05555e+1', '0')).toBe(11);
  });
});
(0, _globals.describe)('toPercent', () => {
  const fn = _math.toPercent;
  (0, _globals.test)('should return value by v, min, max', () => {
    (0, _globals.expect)(fn(1, 0, 10)).toBe(10);
    (0, _globals.expect)(fn(5, 0, 10)).toBe(50);
    (0, _globals.expect)(fn(9, 0, 10)).toBe(90);
  });
  (0, _globals.test)('should return 0 in edge case: min=max', () => {
    (0, _globals.expect)(fn(10, 10, 10)).toBe(0);
  });
});