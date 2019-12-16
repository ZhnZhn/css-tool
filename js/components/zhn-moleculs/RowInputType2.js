"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _A = _interopRequireDefault(require("../zhn/A"));

var S = {
  ROOT: {
    lineHeight: 1.8
  },
  TEXT: {
    "float": 'right',
    width: '80px'
  }
};

var RowInputType2 = function RowInputType2(_ref) {
  var style = _ref.style,
      styleInput = _ref.styleInput,
      caption = _ref.caption,
      initValue = _ref.initValue,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? function () {} : _ref$onEnter;
  return _react["default"].createElement("div", {
    style: style
  }, _react["default"].createElement("label", {
    style: (0, _extends2["default"])({}, S.ROOT)
  }, _react["default"].createElement("span", null, caption), _react["default"].createElement(_A["default"].InputText, {
    style: (0, _extends2["default"])({}, S.TEXT, {}, styleInput),
    initValue: initValue,
    onEnter: onEnter
  })));
};

var _default = RowInputType2;
exports["default"] = _default;
//# sourceMappingURL=RowInputType2.js.map