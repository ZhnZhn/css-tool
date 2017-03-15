'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = {
  toCssValue: function toCssValue(boxShadow) {
    var vLength = boxShadow.vLength,
        gLength = boxShadow.gLength,
        blurR = boxShadow.blurR,
        spreadR = boxShadow.spreadR,
        color = boxShadow.color,
        opacity = boxShadow.opacity,
        cRgb = (0, _tinycolor2.default)(color).toRgb();

    return vLength + 'px ' + gLength + 'px ' + blurR + 'px ' + spreadR + 'px rgba(' + cRgb.r + ', ' + cRgb.g + ', ' + cRgb.b + ', ' + opacity + ')';
  }
};

exports.default = fn;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\helpers\fn.js.map