"use strict";

exports.__esModule = true;
exports.default = void 0;
var _jsxRuntime = require("preact/jsx-runtime");
const S_HOT_KEY = {
  textDecoration: 'underline'
};
const _crHotKeyIndex = (caption, hotKey) => hotKey ? caption.toLowerCase().indexOf(hotKey) : -1;
const CaptionWithHotKey = _ref => {
  let {
    caption,
    hotKey
  } = _ref;
  const index = _crHotKeyIndex(caption, hotKey);
  if (index === -1) {
    return (0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
      children: caption
    });
  }
  const _before = caption.slice(0, index),
    _key = caption.slice(index, index + 1),
    _after = caption.slice(index + 1);
  return (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [(0, _jsxRuntime.jsx)("span", {
      children: _before
    }), (0, _jsxRuntime.jsx)("span", {
      style: S_HOT_KEY,
      children: _key
    }), (0, _jsxRuntime.jsx)("span", {
      children: _after
    })]
  });
};
const CaptionInput = _ref2 => {
  let {
    className,
    caption,
    hotKey,
    children
  } = _ref2;
  return caption ? (0, _jsxRuntime.jsxs)("span", {
    className: className,
    children: [(0, _jsxRuntime.jsx)(CaptionWithHotKey, {
      caption: caption,
      hotKey: hotKey
    }), children]
  }) : null;
};
var _default = exports.default = CaptionInput;