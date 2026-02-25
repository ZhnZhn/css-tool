"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _InputText = _interopRequireDefault(require("../zhn/InputText"));
var _style = require("./style");
var _jsxRuntime = require("preact/jsx-runtime");
const RowInputText = props => (0, _jsxRuntime.jsx)("div", {
  className: _style.CL_ROW,
  children: (0, _jsxRuntime.jsxs)("label", {
    className: _style.CL_CAPTION,
    children: [(0, _jsxRuntime.jsx)("span", {
      children: props.caption
    }), (0, _jsxRuntime.jsx)(_InputText.default, {
      style: {
        ..._style.S_TEXT,
        ...props.styleInput
      },
      initialValue: props.initValue,
      onEnter: props.onEnter
    })]
  })
});
var _default = exports.default = RowInputText;