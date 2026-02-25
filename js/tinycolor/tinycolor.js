"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _inputToRGB = _interopRequireDefault(require("./inputToRGB"));
var _utils = require("./utils");
const mathRound = Math.round;
let tinyCounter = 0;

// Don't let the range of [0,255] come back in [0,1].
// Potentially lose a little bit of precision here, but will fix issues where
// .5 gets interpreted as half of the total, instead of half of 1
// If it was supposed to be 128, this was already taken care of by `inputToRgb`
const _getRgbItem = v => v < 1 ? mathRound(v) : v;
function TinycolorImpl(color, opts) {
  color = color || '';
  opts = opts || {};

  /*
  // If input is already a tinycolor, return itself
  if (color instanceof tinycolor) {
     return color;
  }
  // If we are called as a function, call using new instead
  if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
  }
  */

  const rgb = (0, _inputToRGB.default)(color);
  this._originalInput = color;
  this._r = _getRgbItem(rgb.r);
  this._g = _getRgbItem(rgb.g);
  this._b = _getRgbItem(rgb.b);
  this._a = rgb.a;
  this._roundA = mathRound(100 * this._a) / 100;
  this._format = opts.format || rgb.format;
  this._gradientType = opts.gradientType;
  this._ok = rgb.ok;
  this._tc_id = tinyCounter++;
}
TinycolorImpl.prototype = {
  isValid: function () {
    return this._ok;
  },
  toRgb: function () {
    return {
      r: mathRound(this._r),
      g: mathRound(this._g),
      b: mathRound(this._b),
      a: this._a
    };
  },
  toHex: function (allow3Char) {
    return (0, _utils.rgbToHex)(this._r, this._g, this._b, allow3Char);
  },
  toHexString: function (allow3Char) {
    return '#' + this.toHex(allow3Char);
  },
  toHsl: function () {
    const hsl = (0, _utils.rgbToHsl)(this._r, this._g, this._b);
    //return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
    return {
      h: hsl.h,
      s: hsl.s,
      l: hsl.l,
      a: this._a
    };
  }
};
const tinycolor = (color, options) => new TinycolorImpl(color, options);
var _default = exports.default = tinycolor;