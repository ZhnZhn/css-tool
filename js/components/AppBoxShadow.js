"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _useToggle = _interopRequireDefault(require("./hooks/useToggle"));
var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));
var _Page = _interopRequireDefault(require("./box-shadow/Page"));
var _jsxRuntime = require("preact/jsx-runtime");
const AppBoxShadow = () => {
  const [isShadow, _toggleShadow] = (0, _useToggle.default)(!0),
    [isBox, _toggleBox] = (0, _useToggle.default)(!1);
  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_HeaderBar.default, {
      onShadow: _toggleShadow,
      onBox: _toggleBox
    }), (0, _jsxRuntime.jsx)(_Page.default, {
      isShadow: isShadow,
      isBox: isBox
    })]
  });
};
var _default = exports.default = AppBoxShadow;