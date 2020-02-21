"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));

var _AppLabel = _interopRequireDefault(require("./AppLabel"));

var _GitHubLink = _interopRequireDefault(require("./GitHubLink"));

var CAPTION = "CSS Tool v0.1.0";

var HeaderBar = function HeaderBar(_ref) {
  var onShadow = _ref.onShadow,
      onBox = _ref.onBox;
  return _react["default"].createElement("div", {
    className: "header"
  }, _react["default"].createElement(_IconAppLogo["default"], {
    className: "header__icon-app",
    title: CAPTION
  }), _react["default"].createElement("div", {
    className: "header__icon-gap"
  }), _react["default"].createElement(_AppLabel["default"], {
    className: "header__label-app",
    caption: CAPTION
  }), _react["default"].createElement(_Comp["default"].FlatButton, {
    caption: "Box",
    title: "Click to toggle css box inputs",
    accessKey: "b",
    timeout: 0,
    onClick: onBox
  }), _react["default"].createElement(_Comp["default"].FlatButton, {
    caption: "Shadow",
    title: "Click to toggle css shadow-box inputs",
    accessKey: "h",
    timeout: 0,
    onClick: onShadow
  }), _react["default"].createElement(_GitHubLink["default"], {
    className: "header__github-link",
    title: "GitHub Repository",
    href: "https://github.com/zhnzhn/css-tool/"
  }));
};

var _default = HeaderBar;
exports["default"] = _default;
//# sourceMappingURL=HeaderBar.js.map