"use strict";

var _globals = require("@jest/globals");
var _fn = require("../fn");
const _boxShadow = {
  isInset: false,
  gLength: 6,
  vLength: 10,
  blurR: 4,
  spreadR: 5,
  color: '#a8a9aa',
  opacity: 0,
  id: 'test'
};
(0, _globals.describe)("toRgba", () => {
  const fn = _fn.toRgba;
  (0, _globals.test)("should return rgba start string from ShadowType", () => {
    (0, _globals.expect)(fn(_boxShadow)).toBe('rgba(168, 169, 170,');
  });
});
(0, _globals.describe)("toCssValue", () => {
  const fn = _fn.toCssValue;
  (0, _globals.test)("should return css shadow value string from ShadowType", () => {
    (0, _globals.expect)(fn(_boxShadow)).toBe('6px 10px 4px 5px rgba(168, 169, 170, 0)');
    (0, _globals.expect)(fn({
      ..._boxShadow,
      isInset: true
    })).toBe('inset 6px 10px 4px 5px rgba(168, 169, 170, 0)');
  });
});