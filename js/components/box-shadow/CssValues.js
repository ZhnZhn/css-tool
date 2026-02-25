"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _CssValue = _interopRequireDefault(require("./CssValue"));
var _RaisedButton = _interopRequireDefault(require("../zhn/RaisedButton"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_PAGE_SB_CSS = "page-sb__css",
  CL_CSS_PROPERTY = "css-property",
  CL_CSS_VALUE = "css-value";
const S_EDITED = {
  borderBottom: '2px solid green'
};
const _renderValues = props => {
  const {
      boxShadows = [],
      currentIndex,
      onAdd,
      onEdit,
      onRemove
    } = props,
    max = boxShadows.length - 1;
  return boxShadows.map((item, index) => {
    const _sufix = index !== max ? "," : ";",
      _styleValue = index === currentIndex ? S_EDITED : void 0;
    return (0, _jsxRuntime.jsxs)("div", {
      children: [(0, _jsxRuntime.jsx)("span", {
        tabIndex: -1,
        className: CL_CSS_VALUE,
        style: _styleValue,
        onClick: () => onEdit(index),
        children: (0, _jsxRuntime.jsx)(_CssValue.default, {
          item: item,
          sufix: _sufix
        })
      }), (0, _jsxRuntime.jsx)(_RaisedButton.default, {
        caption: "ADD",
        onClick: () => onAdd(index)
      }), index !== 0 && (0, _jsxRuntime.jsx)(_RaisedButton.default, {
        caption: "REMOVE",
        onClick: () => onRemove(index)
      })]
    }, index);
  });
};
const CssValues = props => (0, _jsxRuntime.jsxs)("div", {
  className: CL_PAGE_SB_CSS,
  children: [(0, _jsxRuntime.jsx)("div", {
    className: CL_CSS_PROPERTY,
    children: "BOX-SHADOW:"
  }), _renderValues(props)]
});
var _default = exports.default = CssValues;