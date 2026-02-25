"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL_BT_RAISED = "bt-raised";
const CL_WRAPPER_BT_RAISED = `wrapper__${CL_BT_RAISED}`;
const CL_BT_RAISED_DIV = `${CL_BT_RAISED}__div`;
const CL_BT_RAISED_CAPTION = `${CL_BT_RAISED}__caption`;
const RaisedButton = props => (0, _jsxRuntime.jsx)("div", {
  className: CL_WRAPPER_BT_RAISED,
  children: (0, _jsxRuntime.jsx)("button", {
    className: CL_BT_RAISED,
    onClick: props.onClick,
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_BT_RAISED_DIV,
      children: (0, _jsxRuntime.jsx)("span", {
        className: CL_BT_RAISED_CAPTION,
        children: props.caption
      })
    })
  })
});
var _default = exports.default = RaisedButton;