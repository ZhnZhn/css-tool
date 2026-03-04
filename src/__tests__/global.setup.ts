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
  
type CanvasContextMock = {
  fillStyle: keyof typeof _hmColorRgb,
  fillRect: () => void
  getImageData: () => number[]
}

const PREV_GLOBAL_DOCUMENT = global.document;
let ctx: CanvasContextMock;  

ctx = {     
  fillStyle: 'black',
  fillRect: jest.fn(),
  getImageData: jest.fn(() => {                  
    return {
      data: _hmColorRgb[ctx.fillStyle] || []
    };
  })
} as unknown as CanvasContextMock                           
global.document = {       
  ...PREV_GLOBAL_DOCUMENT,
  createElement: jest.fn(tagName => tagName === 'canvas'
    ? { getContext: jest.fn(() => ctx) }
    : PREV_GLOBAL_DOCUMENT.createElement(tagName)
  )
}     