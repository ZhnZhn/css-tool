"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _Svg = _interopRequireDefault(require("../zhn/Svg"));
var _jsxRuntime = require("preact/jsx-runtime");
const _crRect = (rx, y, x, height, width, color) => (0, _jsxRuntime.jsx)("rect", {
  ry: "2",
  rx: rx,
  y: y,
  x: x,
  height: height,
  width: width,
  fill: color,
  stroke: color
});
const IconAppLogo = props => (0, _jsxRuntime.jsx)("span", {
  className: props.className,
  title: props.title,
  children: (0, _jsxRuntime.jsxs)(_Svg.default, {
    w: "32",
    "stroke-miterlimit": "2",
    "stroke-width": "2",
    children: [_crRect(194, 1.5, 19, 12.5, 11, "#8ecc2d"), _crRect(204.5, 17.5, 9, 13.5, 18, "#232f3b"), _crRect(204.5, 3.5, 2.5, 11, 10, "#a487d4")]
  })
});
var _default = exports.default = IconAppLogo;