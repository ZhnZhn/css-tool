"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _hooks = _interopRequireDefault(require("../hooks"));

var _isKeyEnter = _interopRequireDefault(require("./isKeyEnter"));

var _Color = _interopRequireDefault(require("../styles/Color"));

var _jsxRuntime = require("preact/jsx-runtime");

var useCallback = _hooks["default"].useCallback;
var CL = 'chb';
var S = {
  DIV: {
    transform: 'scale(1.2)'
  },
  SVG: {
    display: 'inline-block'
  }
};

var SvgChecked = function SvgChecked(_ref) {
  var stroke = _ref.stroke;
  return (0, _jsxRuntime.jsx)("path", {
    d: "M 2,5 L 8,14 14,1",
    "stroke-width": "2",
    "stroke-linecap": "round",
    stroke: stroke,
    fill: _Color["default"].BLANK
  });
};

var SvgCheckBox = function SvgCheckBox(_ref2) {
  var style = _ref2.style,
      _ref2$checkedRestStro = _ref2.checkedRestStroke,
      checkedRestStroke = _ref2$checkedRestStro === void 0 ? _Color["default"].INPUT_BLUE : _ref2$checkedRestStro,
      _ref2$checkedRestFill = _ref2.checkedRestFill,
      checkedRestFill = _ref2$checkedRestFill === void 0 ? _Color["default"].INPUT_BLUE : _ref2$checkedRestFill,
      _ref2$checkedColor = _ref2.checkedColor,
      checkedColor = _ref2$checkedColor === void 0 ? _Color["default"].BG_GREY : _ref2$checkedColor,
      value = _ref2.value,
      _ref2$onCheck = _ref2.onCheck,
      onCheck = _ref2$onCheck === void 0 ? function () {} : _ref2$onCheck,
      _ref2$onUnCheck = _ref2.onUnCheck,
      onUnCheck = _ref2$onUnCheck === void 0 ? function () {} : _ref2$onUnCheck;

  var _hClick = useCallback(function () {
    if (!value) {
      onCheck();
    } else {
      onUnCheck();
    }
  }, [value, onCheck, onUnCheck]),
      _hKeyDown = useCallback(function (evt) {
    if ((0, _isKeyEnter["default"])(evt)) {
      evt.preventDefault();

      _hClick();
    }
  }, [_hClick]);

  var _restStroke = value ? checkedRestStroke : _Color["default"].INPUT_GREY,
      _restFill = value ? checkedRestFill : _Color["default"].BLANK;

  return (0, _jsxRuntime.jsx)("div", {
    role: "checkbox",
    tabIndex: "0",
    "aria-checked": value,
    className: CL,
    style: (0, _extends2["default"])({}, S.DIV, style),
    onClick: _hClick,
    onKeyDown: _hKeyDown,
    children: (0, _jsxRuntime.jsxs)("svg", {
      viewBox: "0 0 16 16",
      width: "100%",
      height: "100%",
      preserveAspectRatio: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: S.SVG,
      children: [(0, _jsxRuntime.jsx)("rect", {
        x: "1",
        y: "1",
        height: "14",
        width: "14",
        "stroke-width": "2",
        rx: "3",
        stroke: _restStroke,
        fill: _restFill
      }), value ? (0, _jsxRuntime.jsx)(SvgChecked, {
        stroke: checkedColor
      }) : null]
    })
  });
};

var _default = SvgCheckBox;
exports["default"] = _default;
//# sourceMappingURL=SvgCheckBox.js.map