"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var fn = {
  toCssValue: function toCssValue(boxShadow) {
    var vLength = boxShadow.vLength,
        gLength = boxShadow.gLength,
        blurR = boxShadow.blurR,
        spreadR = boxShadow.spreadR,
        opacity = boxShadow.opacity;

    return vLength + "px " + gLength + "px " + blurR + "px " + spreadR + "px rgba(0, 0, 0, " + opacity + ")";
  }
};

exports.default = fn;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\helpers\fn.js.map