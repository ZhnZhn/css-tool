"use strict";

exports.__esModule = true;
exports.toRgba = exports.toCssValue = exports.CL_PREVIEW_INNER = exports.CL_PREVIEW = void 0;
var _transformFn = require("../../colors/transformFn");
const CL_PREVIEW = exports.CL_PREVIEW = "page-sb__preview";
const CL_PREVIEW_INNER = exports.CL_PREVIEW_INNER = `${CL_PREVIEW}__inner`;
const toRgba = color => {
  const [r, g, b] = (0, _transformFn.toRgb)(color);
  return `rgba(${r}, ${g}, ${b},`;
};
exports.toRgba = toRgba;
const toCssValue = _ref => {
  let {
    isInset,
    vLength,
    gLength,
    blurR,
    spreadR,
    color,
    opacity
  } = _ref;
  const _strCss = [gLength, vLength, blurR, spreadR].join('px ') + 'px',
    _prefix = isInset ? 'inset ' + _strCss : _strCss;
  return `${_prefix} ${toRgba(color)} ${opacity})`;
};
exports.toCssValue = toCssValue;