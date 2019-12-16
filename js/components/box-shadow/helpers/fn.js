"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _tinycolor = _interopRequireDefault(require("tinycolor2"));

var fn = {
  toCssValue: function toCssValue(boxShadow) {
    var vLength = boxShadow.vLength,
        gLength = boxShadow.gLength,
        blurR = boxShadow.blurR,
        spreadR = boxShadow.spreadR,
        color = boxShadow.color,
        opacity = boxShadow.opacity,
        cRgb = (0, _tinycolor["default"])(color).toRgb();
    return vLength + "px " + gLength + "px " + blurR + "px " + spreadR + "px rgba(" + cRgb.r + ", " + cRgb.g + ", " + cRgb.b + ", " + opacity + ")";
  }
};
var _default = fn;
exports["default"] = _default;
//# sourceMappingURL=fn.js.map