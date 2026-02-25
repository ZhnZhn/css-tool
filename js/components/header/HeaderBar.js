"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _IconAppLogo = _interopRequireDefault(require("./IconAppLogo"));
var _AppLabel = _interopRequireDefault(require("./AppLabel"));
var _GitHubLink = _interopRequireDefault(require("./GitHubLink"));
var _jsxRuntime = require("preact/jsx-runtime");
const CAPTION = "CSS Tool v0.2.0";
const HeaderBar = props => (0, _jsxRuntime.jsxs)("div", {
  className: "header",
  children: [(0, _jsxRuntime.jsx)(_IconAppLogo.default, {
    className: "header__icon-app",
    title: CAPTION
  }), (0, _jsxRuntime.jsx)(_AppLabel.default, {
    className: "header__label-app",
    caption: CAPTION
  }), (0, _jsxRuntime.jsx)(_FlatButton.default, {
    caption: "Box",
    title: "Click to toggle css box inputs",
    accessKey: "b",
    timeout: 0,
    onClick: props.onBox
  }), (0, _jsxRuntime.jsx)(_FlatButton.default, {
    caption: "Shadow",
    title: "Click to toggle css shadow-box inputs",
    accessKey: "h",
    timeout: 0,
    onClick: props.onShadow
  }), (0, _jsxRuntime.jsx)(_GitHubLink.default, {
    className: "header__github-link",
    title: "GitHub Repository",
    href: "https://github.com/zhnzhn/css-tool/"
  })]
});
var _default = exports.default = HeaderBar;