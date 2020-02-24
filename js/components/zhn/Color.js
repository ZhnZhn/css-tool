"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _preact = require("preact");

var S = {
  ROOT: {
    display: 'inline-block',
    height: 32,
    width: 32,
    borderRadius: 2,
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

var Color = function Color(_ref) {
  var style = _ref.style,
      value = _ref.value;

  var _style = value ? {
    backgroundColor: value
  } : null;

  return (0, _preact.h)("span", {
    style: (0, _extends2["default"])({}, S.ROOT, {}, style, {}, _style)
  });
};
/*
Color.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string
}
*/


var _default = Color;
exports["default"] = _default;
//# sourceMappingURL=Color.js.map