"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
;
const Svg = _ref => {
  let {
    w,
    h = w,
    children,
    ...restProps
  } = _ref;
  return (0, _jsxRuntime.jsx)("svg", {
    viewBox: `0 0 ${w} ${h}`,
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "stroke-linejoin": "round",
    ...restProps,
    xmlns: "http://www.w3.org/2000/svg",
    children: children
  });
};
var _default = exports.default = Svg;