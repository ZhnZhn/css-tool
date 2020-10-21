"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("preact/jsx-runtime");

var _useToggle3 = _interopRequireDefault(require("./hooks/useToggle"));

var _HeaderBar = _interopRequireDefault(require("./header/HeaderBar"));

var _Page = _interopRequireDefault(require("./box-shadow/Page"));

var AppBoxShadow = function AppBoxShadow() {
  var _useToggle = (0, _useToggle3["default"])(true),
      isShadow = _useToggle[0],
      _toggleShadow = _useToggle[1],
      _useToggle2 = (0, _useToggle3["default"])(false),
      isBox = _useToggle2[0],
      _toggleBox = _useToggle2[1];

  return (0, _jsxRuntime.jsxs)("div", {
    children: [(0, _jsxRuntime.jsx)(_HeaderBar["default"], {
      onShadow: _toggleShadow,
      onBox: _toggleBox
    }), (0, _jsxRuntime.jsx)(_Page["default"], {
      isShadow: isShadow,
      isBox: isBox
    })]
  });
};

var _default = AppBoxShadow;
exports["default"] = _default;
//# sourceMappingURL=AppBoxShadow.js.map