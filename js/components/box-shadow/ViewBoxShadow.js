"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _memo = _interopRequireDefault(require("../memo"));
var _CssValues = _interopRequireDefault(require("./CssValues"));
var _Preview = _interopRequireDefault(require("./Preview"));
var _jsxRuntime = require("preact/jsx-runtime");
const ViewBoxShadow = props => (0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
  children: [(0, _jsxRuntime.jsx)(_Preview.default, {
    boxShadows: props.boxShadows,
    configStyle: props.configStyle
  }), (0, _jsxRuntime.jsx)(_CssValues.default, {
    currentIndex: props.currentIndex,
    boxShadows: props.boxShadows,
    onAdd: props.onAdd,
    onEdit: props.onEdit,
    onRemove: props.onRemove
  })]
});
const _isNotShouldUpdate = (prevProps, nextProps) => prevProps.boxShadows === nextProps.boxShadows && prevProps.currentIndex === nextProps.currentIndex && prevProps.configStyle === nextProps.configStyle;
var _default = exports.default = (0, _memo.default)(ViewBoxShadow, _isNotShouldUpdate);