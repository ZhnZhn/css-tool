"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BOX_COLOR = 'box-color box-shadow';
const Color = props => {
  const _style = props.value ? {
    backgroundColor: props.value
  } : null;
  return (0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: CL_BOX_COLOR,
    style: {
      ...props.style,
      ..._style
    },
    onClick: props.onClick
  });
};
var _default = exports.default = Color;