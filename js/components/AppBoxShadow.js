"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

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

  return _react["default"].createElement("div", null, _react["default"].createElement(_HeaderBar["default"], {
    onShadow: _toggleShadow,
    onBox: _toggleBox
  }), _react["default"].createElement(_Page["default"], {
    isShadow: isShadow,
    isBox: isBox
  }));
};

var _default = AppBoxShadow;
exports["default"] = _default;
//# sourceMappingURL=AppBoxShadow.js.map