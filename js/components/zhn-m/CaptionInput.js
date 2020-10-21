"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("preact/jsx-runtime");

var S = {
  KEY: {
    textDecoration: 'underline'
  }
};

var CaptionInput = function CaptionInput(_ref) {
  var className = _ref.className,
      rootStyle = _ref.rootStyle,
      caption = _ref.caption,
      _ref$accessKey = _ref.accessKey,
      accessKey = _ref$accessKey === void 0 ? '' : _ref$accessKey,
      children = _ref.children;

  if (!caption) {
    return null;
  }

  var _index = caption.toLowerCase().indexOf(accessKey);

  if (accessKey && _index !== -1) {
    var _before = caption.substring(0, _index),
        _key = caption.substring(_index, _index + 1),
        _after = caption.substring(_index + 1);

    return (0, _jsxRuntime.jsxs)("span", {
      className: className,
      style: rootStyle,
      children: [(0, _jsxRuntime.jsx)("span", {
        children: _before
      }), (0, _jsxRuntime.jsx)("span", {
        style: S.KEY,
        children: _key
      }), (0, _jsxRuntime.jsx)("span", {
        children: _after
      }), children]
    });
  } else {
    return (0, _jsxRuntime.jsxs)("span", {
      className: className,
      style: rootStyle,
      children: [caption, children]
    });
  }
};

var _default = CaptionInput;
exports["default"] = _default;
//# sourceMappingURL=CaptionInput.js.map