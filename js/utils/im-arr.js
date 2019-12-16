"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var imArr = {
  insert: function insert(arr, index, value) {
    if (arr === void 0) {
      arr = [];
    }

    if (index === void 0) {
      index = 0;
    }

    if (value === void 0) {
      value = {};
    }

    return [].concat(arr.slice(0, index), [value], arr.slice(index));
  },
  update: function update(arr, index, value) {
    if (arr === void 0) {
      arr = [];
    }

    arr[index] = value;
    return [].concat(arr);
  },
  remove: function remove(arr, index) {
    if (arr === void 0) {
      arr = [];
    }

    return [].concat(arr.slice(0, index), arr.slice(index + 1));
  }
};
var _default = imArr;
exports["default"] = _default;
//# sourceMappingURL=im-arr.js.map