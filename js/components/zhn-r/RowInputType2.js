"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("preact/jsx-runtime");

var _A = _interopRequireDefault(require("../zhn/A"));

var _style = _interopRequireDefault(require("./style"));

var RowInputType2 = function RowInputType2(_ref) {
  var styleInput = _ref.styleInput,
      caption = _ref.caption,
      initValue = _ref.initValue,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? function () {} : _ref$onEnter;
  return (0, _jsxRuntime.jsx)("div", {
    className: _style["default"].CL_ROW,
    children: (0, _jsxRuntime.jsxs)("label", {
      className: _style["default"].CL_CAPTION,
      children: [(0, _jsxRuntime.jsx)("span", {
        children: caption
      }), (0, _jsxRuntime.jsx)(_A["default"].InputText, {
        style: (0, _extends2["default"])({}, _style["default"].TEXT, styleInput),
        initValue: initValue,
        onEnter: onEnter
      })]
    })
  });
};

var _default = RowInputType2;
exports["default"] = _default;
//# sourceMappingURL=RowInputType2.js.map