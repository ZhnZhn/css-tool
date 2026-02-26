"use strict";

exports.__esModule = true;
exports.S_TEXT = exports.S_RIGHT = exports.S_INPUT_SWITCH = exports.S_COLOR = exports.CL_ROW = exports.CL_CAPTION = void 0;
const CL_ROW = exports.CL_ROW = 'row';
const CL_CAPTION = exports.CL_CAPTION = `${CL_ROW}__caption`;
const crFloatRightCss = style => ({
  ...style,
  float: 'right'
});
const S_RIGHT = exports.S_RIGHT = crFloatRightCss();
const S_COLOR = exports.S_COLOR = crFloatRightCss({
  marginRight: 16
});
const S_TEXT = exports.S_TEXT = crFloatRightCss({
  width: 80
});
const S_INPUT_SWITCH = exports.S_INPUT_SWITCH = {
  flexDirection: 'row',
  width: 'fit-content'
};