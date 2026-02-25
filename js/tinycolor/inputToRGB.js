"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../utils/isTypeFn");
var _utils = require("./utils");
const mathMin = Math.min,
  mathMax = Math.max,
  _hasOwnProperty = Object.prototype.hasOwnProperty,
  _isRgbFormat = color => (0, _utils.isValidCSSUnit)(color.r) && (0, _utils.isValidCSSUnit)(color.g) && (0, _utils.isValidCSSUnit)(color.b),
  _isHsFormat = color => (0, _utils.isValidCSSUnit)(color.h) && (0, _utils.isValidCSSUnit)(color.s);
function inputToRGB(color) {
  let rgb = {
      r: 0,
      g: 0,
      b: 0
    },
    a = 1,
    s = null,
    v = null,
    l = null,
    ok = false,
    format = false;
  if ((0, _isTypeFn.isStr)(color)) {
    color = (0, _utils.stringInputToObject)(color);
  }
  if ((0, _isTypeFn.isObj)(color)) {
    if (_isRgbFormat(color)) {
      rgb = (0, _utils.rgbToRgb)(color.r, color.g, color.b);
      ok = true;
      format = String(color.r).slice(-1) === "%" ? "prgb" : "rgb";
    } else if (_isHsFormat(color)) {
      if ((0, _utils.isValidCSSUnit)(color.v)) {
        s = (0, _utils.convertToPercentage)(color.s);
        v = (0, _utils.convertToPercentage)(color.v);
        rgb = (0, _utils.hsvToRgb)(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if ((0, _utils.isValidCSSUnit)(color.l)) {
        s = (0, _utils.convertToPercentage)(color.s);
        l = (0, _utils.convertToPercentage)(color.l);
        rgb = (0, _utils.hslToRgb)(color.h, s, l);
        ok = true;
        format = "hsl";
      }
    }
    if (_hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = (0, _utils.boundAlpha)(a);
  return {
    ok: ok,
    format: color.format || format,
    r: mathMin(255, mathMax(rgb.r, 0)),
    g: mathMin(255, mathMax(rgb.g, 0)),
    b: mathMin(255, mathMax(rgb.b, 0)),
    a: a
  };
}
var _default = exports.default = inputToRGB;