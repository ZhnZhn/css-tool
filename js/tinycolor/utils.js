"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.boundAlpha = boundAlpha;
exports.convertToPercentage = convertToPercentage;
exports.hslToRgb = hslToRgb;
exports.hsvToRgb = hsvToRgb;
exports.isValidCSSUnit = isValidCSSUnit;
exports.rgbToHex = rgbToHex;
exports.rgbToHsl = rgbToHsl;
exports.rgbToRgb = rgbToRgb;
exports.stringInputToObject = stringInputToObject;
var _cssColorMatchers = require("./css-color-matchers");
var _cssColorNames = _interopRequireDefault(require("./css-color-names"));
var _math = require("./math");
const trimLeft = /^\s+/,
  trimRight = /\s+$/;

// `isValidCSSUnit`
// Take in a single string / number and check to see if it looks like a CSS unit
// (see `matchers` above for definition).
function isValidCSSUnit(color) {
  return !!_cssColorMatchers.matcherCssUnit.exec(color);
}

// `stringInputToObject`
// Permissive string parsing.  Take in a number of formats, and output an object
// based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
function stringInputToObject(color) {
  color = color.replace(trimLeft, '').replace(trimRight, '').toLowerCase();
  let named = false;
  if (_cssColorNames.default[color]) {
    color = _cssColorNames.default[color];
    named = true;
  } else if (color == 'transparent') {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 0,
      format: "name"
    };
  }
  // Try to match string input using regular expressions.
  // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
  // Just return an object and let the conversion functions handle that.
  // This way the result will be the same whether the tinycolor is initialized with string or object.
  let match;
  if (match = _cssColorMatchers.matcherRgb.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3]
    };
  }
  if (match = _cssColorMatchers.matcherRgba.exec(color)) {
    return {
      r: match[1],
      g: match[2],
      b: match[3],
      a: match[4]
    };
  }
  if (match = _cssColorMatchers.matcherHsl.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3]
    };
  }
  if (match = _cssColorMatchers.matcherHsla.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      l: match[3],
      a: match[4]
    };
  }
  if (match = _cssColorMatchers.matcherHsv.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3]
    };
  }
  if (match = _cssColorMatchers.matcherHsva.exec(color)) {
    return {
      h: match[1],
      s: match[2],
      v: match[3],
      a: match[4]
    };
  }
  if (match = _cssColorMatchers.matcherHex8.exec(color)) {
    return {
      r: (0, _math.parseIntFromHex)(match[1]),
      g: (0, _math.parseIntFromHex)(match[2]),
      b: (0, _math.parseIntFromHex)(match[3]),
      a: (0, _math.convertHexToDecimal)(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = _cssColorMatchers.matcherHex6.exec(color)) {
    return {
      r: (0, _math.parseIntFromHex)(match[1]),
      g: (0, _math.parseIntFromHex)(match[2]),
      b: (0, _math.parseIntFromHex)(match[3]),
      format: named ? "name" : "hex"
    };
  }
  if (match = _cssColorMatchers.matcherHex4.exec(color)) {
    return {
      r: (0, _math.parseIntFromHex)(match[1] + '' + match[1]),
      g: (0, _math.parseIntFromHex)(match[2] + '' + match[2]),
      b: (0, _math.parseIntFromHex)(match[3] + '' + match[3]),
      a: (0, _math.convertHexToDecimal)(match[4] + '' + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  if (match = _cssColorMatchers.matcherHex3.exec(color)) {
    return {
      r: (0, _math.parseIntFromHex)(match[1] + '' + match[1]),
      g: (0, _math.parseIntFromHex)(match[2] + '' + match[2]),
      b: (0, _math.parseIntFromHex)(match[3] + '' + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}

// `rgbToRgb`
// Handle bounds / percentage checking to conform to CSS color spec
// <http://www.w3.org/TR/css3-color/>
// *Assumes:* r, g, b in [0, 255] or [0, 1]
// *Returns:* { r, g, b } in [0, 255]
function rgbToRgb(r, g, b) {
  return {
    r: (0, _math.bound01)(r, 255) * 255,
    g: (0, _math.bound01)(g, 255) * 255,
    b: (0, _math.bound01)(b, 255) * 255
  };
}

// Replace a decimal with it's percentage value
function convertToPercentage(n) {
  if (n <= 1) {
    n = n * 100 + "%";
  }
  return n;
}

// `hsvToRgb`
// Converts an HSV color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hsvToRgb(h, s, v) {
  h = (0, _math.bound01)(h, 360) * 6;
  s = (0, _math.bound01)(s, 100);
  v = (0, _math.bound01)(v, 100);
  const i = Math.floor(h),
    f = h - i,
    p = v * (1 - s),
    q = v * (1 - f * s),
    t = v * (1 - (1 - f) * s),
    mod = i % 6,
    r = [v, q, p, p, t, v][mod],
    g = [t, v, v, q, p, p][mod],
    b = [p, p, t, v, v, q][mod];
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}

// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
// *Returns:* { r, g, b } in the set [0, 255]
function hslToRgb(h, s, l) {
  let r, g, b;
  h = (0, _math.bound01)(h, 360);
  s = (0, _math.bound01)(s, 100);
  l = (0, _math.bound01)(l, 100);
  function hue2rgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return {
    r: r * 255,
    g: g * 255,
    b: b * 255
  };
}
const mathMax = Math.max,
  mathMin = Math.min,
  mathRound = Math.round;
// `rgbToHsl`
// Converts an RGB color value to HSL.
// *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
// *Returns:* { h, s, l } in [0,1]
function rgbToHsl(r, g, b) {
  r = (0, _math.bound01)(r, 255);
  g = (0, _math.bound01)(g, 255);
  b = (0, _math.bound01)(b, 255);
  const max = mathMax(r, g, b),
    min = mathMin(r, g, b);
  let h,
    s,
    l = (max + min) / 2;
  if (max == min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }

  //return { h: h, s: s, l: l };
  //console.log(h)
  return {
    h: mathRound(h * 360),
    s: mathRound(100 * s),
    l: mathRound(100 * l)
  };
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}

// `rgbToHex`
// Converts an RGB color to hex
// Assumes r, g, and b are contained in the set [0, 255]
// Returns a 3 or 6 character hex
function rgbToHex(r, g, b, allow3Char) {
  const hex = [(0, _math.crHexFromDec)(r), (0, _math.crHexFromDec)(g), (0, _math.crHexFromDec)(b)];

  // Return a 3 character hex if possible
  if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}