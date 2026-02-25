"use strict";

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
describe("box-shadow helper fns", () => {
  test("toRgba should return rgba start string from ShadowType", () => {
    expect((0, _fn.toRgba)(_boxShadow)).toBe('rgba(168, 169, 170,');
  });
  test("toCssValue should return css shadow value string from ShadowType", () => {
    expect((0, _fn.toCssValue)(_boxShadow)).toBe('6px 10px 4px 5px rgba(168, 169, 170, 0)');
    expect((0, _fn.toCssValue)({
      ..._boxShadow,
      isInset: true
    })).toBe('inset 6px 10px 4px 5px rgba(168, 169, 170, 0)');
  });
});