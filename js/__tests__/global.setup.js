"use strict";

const _hmColorRgb = {
  black: [0, 0, 0],
  white: [255, 255, 255],
  red: [255, 0, 0],
  green: [0, 128, 0],
  blue: [0, 0, 255],
  cyan: [0, 255, 255],
  yellow: [255, 255, 0],
  '#a8a9aa': [168, 169, 170]
};
const PREV_GLOBAL_DOCUMENT = global.document;
let ctx;
ctx = {
  fillStyle: 'black',
  fillRect: jest.fn(),
  getImageData: jest.fn(() => {
    return {
      data: _hmColorRgb[ctx.fillStyle] || []
    };
  })
};
global.document = {
  ...PREV_GLOBAL_DOCUMENT,
  createElement: jest.fn(tagName => tagName === 'canvas' ? {
    getContext: jest.fn(() => ctx)
  } : PREV_GLOBAL_DOCUMENT.createElement(tagName))
};