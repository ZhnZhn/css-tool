"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _fn = require("./helpers/fn");
var _CssToken = _interopRequireDefault(require("./CssToken"));
var _jsxRuntime = require("preact/jsx-runtime");
const _crTokenTitle = s => `${s}px`;
const CssValue = props => {
  const {
    isInset,
    gLength,
    vLength,
    blurR,
    spreadR,
    opacity
  } = props.item;
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [isInset && (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: "inset",
      id: "inset"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: _crTokenTitle(gLength),
      id: "horizontal-length"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: _crTokenTitle(vLength),
      id: "vertical-length"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: _crTokenTitle(blurR),
      id: "blur-radius"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: _crTokenTitle(spreadR),
      id: "spread-radius"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: (0, _fn.toRgba)(props.item),
      id: "shadow-color"
    }), (0, _jsxRuntime.jsx)(_CssToken.default, {
      title: `${opacity})${props.sufix}`,
      id: "opacity"
    })]
  });
};
var _default = exports.default = CssValue;