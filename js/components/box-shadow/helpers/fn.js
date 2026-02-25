"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.toRgba = exports.toCssValue = void 0;
var _tinycolor = _interopRequireDefault(require("../../../tinycolor/tinycolor"));
const _toRgb = color => (0, _tinycolor.default)(color).toRgb();
const toRgba = _ref => {
  let {
    color
  } = _ref;
  const {
    r,
    g,
    b
  } = _toRgb(color);
  return `rgba(${r}, ${g}, ${b},`;
};
exports.toRgba = toRgba;
const toCssValue = _ref2 => {
  let {
    isInset,
    vLength,
    gLength,
    blurR,
    spreadR,
    color,
    opacity
  } = _ref2;
  const _strCss = [gLength + 'px', vLength + 'px', blurR + 'px', spreadR + 'px'].join(' '),
    _prefix = isInset ? 'inset ' + _strCss : _strCss,
    {
      r,
      g,
      b
    } = _toRgb(color);
  return `${_prefix} rgba(${r}, ${g}, ${b}, ${opacity})`;
};
exports.toCssValue = toCssValue;