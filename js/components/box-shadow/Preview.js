"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _fn = require("./helpers/fn");
var _jsxRuntime = require("preact/jsx-runtime");
const CL_PREVIEW = "page-sb__preview",
  CL_INNER = `${CL_PREVIEW}__inner`;
const _crBoxShadowStyle = boxShadows => ({
  boxShadow: (0, _uiApi.safeMap)(boxShadows, _fn.toCssValue).join(',')
});
const Preview = props => {
  const {
    bgColor,
    boxColor,
    boxBorderRadius
  } = props.configStyle || {};
  return (0, _jsxRuntime.jsx)("div", {
    className: CL_PREVIEW,
    style: {
      backgroundColor: bgColor
    },
    children: (0, _jsxRuntime.jsx)("div", {
      className: CL_INNER,
      style: {
        backgroundColor: boxColor,
        borderRadius: boxBorderRadius,
        ..._crBoxShadowStyle(props.boxShadows)
      }
    })
  });
};
var _default = exports.default = Preview;