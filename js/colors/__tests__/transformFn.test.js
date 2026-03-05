"use strict";

var _globals = require("@jest/globals");
var _transformFn = require("../transformFn");
(0, _globals.describe)('toRgb', () => {
  const fn = _transformFn.toRgb;
  (0, _globals.test)('should return rgb tuple from str color', () => {
    (0, _globals.expect)(fn('black')).toEqual([0, 0, 0]);
    (0, _globals.expect)(fn('white')).toEqual([255, 255, 255]);
    (0, _globals.expect)(fn('red')).toEqual([255, 0, 0]);
    (0, _globals.expect)(fn('green')).toEqual([0, 128, 0]);
    (0, _globals.expect)(fn('blue')).toEqual([0, 0, 255]);
    (0, _globals.expect)(fn('cyan')).toEqual([0, 255, 255]);
    (0, _globals.expect)(fn('yellow')).toEqual([255, 255, 0]);
  });
});
(0, _globals.describe)('toHex', () => {
  const fn = _transformFn.toHex;
  (0, _globals.test)('should return hex color str', () => {
    (0, _globals.expect)(fn('black')).toBe('#000000');
    (0, _globals.expect)(fn('white')).toBe('#ffffff');
    (0, _globals.expect)(fn('red')).toBe('#ff0000');
    (0, _globals.expect)(fn('green')).toBe('#008000');
    (0, _globals.expect)(fn('blue')).toBe('#0000ff');
    (0, _globals.expect)(fn('cyan')).toBe('#00ffff');
    (0, _globals.expect)(fn('yellow')).toBe('#ffff00');
  });
});
(0, _globals.describe)('toHsl', () => {
  const fn = _transformFn.toHsl;
  (0, _globals.test)('should return hsl color object from str', () => {
    (0, _globals.expect)(fn('black')).toEqual({
      h: 0,
      s: 0,
      l: 0
    });
    (0, _globals.expect)(fn('white')).toEqual({
      h: 0,
      s: 0,
      l: 100
    });
    (0, _globals.expect)(fn('red')).toEqual({
      h: 0,
      s: 100,
      l: 50
    });
    (0, _globals.expect)(fn('green')).toEqual({
      h: 120,
      s: 100,
      l: 25
    });
    (0, _globals.expect)(fn('blue')).toEqual({
      h: 240,
      s: 100,
      l: 50
    });
    (0, _globals.expect)(fn('cyan')).toEqual({
      h: 180,
      s: 100,
      l: 50
    });
    (0, _globals.expect)(fn('yellow')).toEqual({
      h: 60,
      s: 100,
      l: 50
    });
  });
});
(0, _globals.describe)('hslToRgb', () => {
  const fn = _transformFn.hslToRgb;
  (0, _globals.test)('should return rgb tuple from h, s, l numbers', () => {
    (0, _globals.expect)(fn(0, 0, 0)).toEqual([0, 0, 0]);
    (0, _globals.expect)(fn(0, 0, 100)).toEqual([255, 255, 255]);
    (0, _globals.expect)(fn(0, 100, 50)).toEqual([255, 0, 0]);
    (0, _globals.expect)(fn(120, 100, 25)).toEqual([0, 128, 0]);
    (0, _globals.expect)(fn(240, 100, 50)).toEqual([0, 0, 255]);
    (0, _globals.expect)(fn(180, 100, 50)).toEqual([0, 255, 255]);
    (0, _globals.expect)(fn(60, 100, 50)).toEqual([255, 255, 0]);
  });
});
(0, _globals.describe)('hslToHex', () => {
  const fn = _transformFn.hslToHex;
  (0, _globals.test)('should return hex color str from h, s, l numbers', () => {
    (0, _globals.expect)(fn(0, 0, 0)).toBe('#000000');
    (0, _globals.expect)(fn(0, 0, 100)).toBe('#ffffff');
    (0, _globals.expect)(fn(0, 100, 50)).toBe('#ff0000');
    (0, _globals.expect)(fn(120, 100, 25)).toBe('#008000');
    (0, _globals.expect)(fn(240, 100, 50)).toBe('#0000ff');
    (0, _globals.expect)(fn(180, 100, 50)).toBe('#00ffff');
    (0, _globals.expect)(fn(60, 100, 50)).toBe('#ffff00');
  });
});