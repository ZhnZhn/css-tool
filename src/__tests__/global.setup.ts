import { jest } from '@jest/globals';

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
  
type CanvasContextMock = {
  fillStyle: keyof typeof _hmColorRgb,
  fillRect: () => void
  getImageData: () => number[]
}

const PREV_GLOBAL_DOCUMENT = globalThis.global.document;

const ctx: CanvasContextMock = {     
  fillStyle: 'black',
  fillRect: jest.fn(),
  getImageData: jest.fn(() => {                  
    return {
      data: _hmColorRgb[ctx.fillStyle] || []
    };
  })
} as unknown as CanvasContextMock                           
globalThis.global.document = {       
  ...PREV_GLOBAL_DOCUMENT,
  //@ts-expect-error createElement
  createElement: jest.fn((tagName: string) => tagName === 'canvas'
    ? { getContext: jest.fn(() => ctx) }
    : PREV_GLOBAL_DOCUMENT.createElement(tagName)
  )
}     