"use strict";

exports.__esModule = true;
exports.toRgba = exports.toCssValue = void 0;
var _transformFn = require("../../../colors/transformFn");
//import tinycolor from '../../../tinycolor/tinycolor'; 

/*
const _toRgb = (
  color: string
) => tinycolor(color).toRgb();

export const toRgba = (
  { color }: ShadowType
): string => {    
  const {r, g, b} = _toRgb(color);
  return `rgba(${r}, ${g}, ${b},`;
}
*/

const toRgba = _ref => {
  let {
    color
  } = _ref;
  const [r, g, b] = (0, _transformFn.toRgb)(color);
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
    [r, g, b] = (0, _transformFn.toRgb)(color);
  //, {r, g, b} = _toRgb(color);
  return `${_prefix} rgba(${r}, ${g}, ${b}, ${opacity})`;
};
exports.toCssValue = toCssValue;