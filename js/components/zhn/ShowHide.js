"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const S_BLOCK = {
  display: 'block'
};
const S_NONE = {
  display: 'none'
};
const ShowHide = props => (0, _jsxRuntime.jsx)("div", {
  style: {
    ...props.style,
    ...(props.is ? S_BLOCK : S_NONE)
  },
  children: props.children
});
var _default = exports.default = ShowHide;