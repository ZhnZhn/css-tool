"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _isNaN = Number.isNaN || isNaN;

var math = {
  round10: function round10(value, exp) {
    value = +value;
    exp = +exp; // If the value is not a number or the exp is not an integer...

    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    } // Shift


    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Shift back

    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
  },
  toPercent: function toPercent(value, min, max) {
    var _percent = (value - min) / (max - min);

    return _isNaN(_percent) ? 0 : _percent * 100;
  }
};
var _default = math;
exports["default"] = _default;
//# sourceMappingURL=math.js.map