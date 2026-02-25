"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _usePageState = _interopRequireDefault(require("./usePageState"));
var _InputBox = _interopRequireDefault(require("./InputBox"));
var _InputShadow = _interopRequireDefault(require("./InputShadow"));
var _ViewBoxShadow = _interopRequireDefault(require("./ViewBoxShadow"));
var _jsxRuntime = require("preact/jsx-runtime");
const CL_PAGE = "page-sb",
  CL_INPUTS = `${CL_PAGE}__inputs`,
  CL_VIEWS = `${CL_PAGE}__views`;
const Page = props => {
  const [state, updateShadows, updateConfig, addShadow, setCurrentShadow, removeShadow] = (0, _usePageState.default)(),
    {
      currentIndex,
      boxShadows,
      configStyle
    } = state,
    _boxShadowCurrent = boxShadows[currentIndex];
  return (0, _jsxRuntime.jsxs)("div", {
    className: CL_PAGE,
    children: [(0, _jsxRuntime.jsxs)("div", {
      className: CL_INPUTS,
      children: [props.isBox ? (0, _jsxRuntime.jsx)(_InputBox.default, {
        configStyle: configStyle,
        onEnter: updateConfig
      }) : null, props.isShadow ? (0, _jsxRuntime.jsx)(_InputShadow.default, {
        id: _boxShadowCurrent.id,
        initialValue: _boxShadowCurrent,
        onChange: updateShadows
      }) : null]
    }), (0, _jsxRuntime.jsx)("div", {
      className: CL_VIEWS,
      children: (0, _jsxRuntime.jsx)(_ViewBoxShadow.default, {
        currentIndex: currentIndex,
        boxShadows: boxShadows,
        configStyle: configStyle,
        onAdd: addShadow,
        onEdit: setCurrentShadow,
        onRemove: removeShadow
      })
    })]
  });
};
var _default = exports.default = Page;