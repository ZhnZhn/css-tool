"use strict";

exports.__esModule = true;
exports.default = void 0;
const _isNaN = Number.isNaN || isNaN;
const getNumberValue = (value, min, max) => {
  if (value === '' || value === '-') {
    return [value, false];
  }
  const _v = parseFloat('' + value),
    _value = _isNaN(_v) ? min : _v > max ? max : _v < min ? min : _v;
  return [_value, true];
};
var _default = exports.default = getNumberValue;