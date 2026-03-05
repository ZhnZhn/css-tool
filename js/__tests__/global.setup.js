"use strict";

var _globals = require("@jest/globals");
const _hmColorRgb = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  green: [0, 128, 0],
  blue: [0, 0, 255],
  cyan: [0, 255, 255],
  yellow: [255, 255, 0],
  '#a7a8a9': [167, 168, 169],
  '#a8a9aa': [168, 169, 170],
  '#a9aaab': [169, 170, 171]
};
const PREV_GLOBAL_DOCUMENT = globalThis.global.document;
const ctx = {
  fillStyle: 'black',
  fillRect: _globals.jest.fn(),
  getImageData: _globals.jest.fn(() => {
    return {
      data: _hmColorRgb[ctx.fillStyle] || []
    };
  })
};
globalThis.global.document = {
  ...PREV_GLOBAL_DOCUMENT,
  //@ts-expect-error createElement
  createElement: _globals.jest.fn(tagName => tagName === 'canvas' ? {
    getContext: _globals.jest.fn(() => ctx)
  } : PREV_GLOBAL_DOCUMENT.createElement(tagName))
};