"use strict";

exports.__esModule = true;
exports.toRgb = exports.toHsl = exports.toHex = exports.hslToRgb = exports.hslToHex = void 0;
const mathRound = Math.round,
  mathMax = Math.max,
  mathMin = Math.min;
let canvas, ctx;
const _initCanvasContext = () => {
  canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.getContext('2d', {
    willReadFrequently: true
  });
};
const _getCanvasContext = () => ctx || (ctx = _initCanvasContext());

//[r, g, b]
const toRgb = strColor => {
  const _ctx = _getCanvasContext();
  if (_ctx) {
    if (_ctx.fillStyle !== strColor) {
      _ctx.fillStyle = strColor;
      _ctx.fillRect(0, 0, 1, 1);
    }
    return _ctx.getImageData(0, 0, 1, 1).data.slice(0, 3);
  }
  return [0, 0, 0];
};
exports.toRgb = toRgb;
const _pad2 = str => str.length === 1 ? '0' + str : str;
const crHexFromDec = n => _pad2(mathRound(n).toString(16));
const _rgbToHex = (r, g, b) => `#${crHexFromDec(r)}${crHexFromDec(g)}${crHexFromDec(b)}`;
const toHex = strColor => {
  const [r, g, b] = toRgb(strColor);
  return _rgbToHex(r, g, b);
};
exports.toHex = toHex;
const toHsl = strColor => {
  const [_r, _g, _b] = toRgb(strColor),
    r = _r / 255,
    g = _g / 255,
    b = _b / 255,
    max = mathMax(r, g, b),
    min = mathMin(r, g, b),
    l = (max + min) / 2;
  let h = 0,
    s;
  if (max == min) {
    h = s = 0; // achromatic case
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? h = (b - r) / d + 2 : max === b ? (r - g) / d + 4 : h;
    h /= 6;
  }
  return {
    h: mathRound(h * 360),
    s: mathRound(s * 100),
    l: mathRound(l * 100)
  };
};
exports.toHsl = toHsl;
const hueToRgb = (p, q, t) => {
  t = t < 0 ? t + 1 : t > 1 ? t - 1 : t;
  return t < 1 / 6 ? p + (q - p) * 6 * t : t < 1 / 2 ? q : t < 2 / 3 ? p + (q - p) * (2 / 3 - t) * 6 : p;
};
const toRgbDimension = n => mathRound(n * 255);
// `hslToRgb`
// Converts an HSL color value to RGB.
// *Assumes:* h is contained in [0, 360] and s and l are contained in [0, 100]
// *Returns:* [ r, g, b ] in the set [0, 255]
const hslToRgb = (h, s, l) => {
  let r, g, b;
  h = h / 360;
  s = s / 100;
  l = l / 100;
  if (s === 0) {
    r = g = b = l; // achromatic case
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s,
      p = 2 * l - q;
    r = hueToRgb(p, q, h + 1 / 3);
    g = hueToRgb(p, q, h);
    b = hueToRgb(p, q, h - 1 / 3);
  }
  return [toRgbDimension(r), toRgbDimension(g), toRgbDimension(b)];
};
exports.hslToRgb = hslToRgb;
const hslToHex = (h, s, l) => {
  const [r, g, b] = hslToRgb(h, s, l);
  return _rgbToHex(r, g, b);
};
exports.hslToHex = hslToHex;