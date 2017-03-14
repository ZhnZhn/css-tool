"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var imArr = {
  insert: function insert() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    return [].concat(_toConsumableArray(arr.slice(0, index)), [value], _toConsumableArray(arr.slice(index)));
  },
  update: function update() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments[1];
    var value = arguments[2];

    arr[index] = value;
    return [].concat(_toConsumableArray(arr));
  },
  remove: function remove() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var index = arguments[1];

    return [].concat(_toConsumableArray(arr.slice(0, index)), _toConsumableArray(arr.slice(index + 1)));
  }
};

exports.default = imArr;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\utils\im-arr.js.map