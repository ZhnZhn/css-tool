"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const CL_CSS_TOKEN = "css-token";
const _onClick = name => {
  document.getElementById(name)?.focus();
};

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
const CssToken = props => (0, _jsxRuntime.jsx)("span", {
  tabIndex: -1,
  className: CL_CSS_TOKEN,
  onClick: () => _onClick(props.id),
  children: props.title
});
/* eslint-enable jsx-a11y/no-static-element-interactions */
/* eslint-enable jsx-a11y/click-events-have-key-events */
var _default = exports.default = CssToken;