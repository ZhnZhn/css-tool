"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var imObj = {
  create: function create(obj) {
    return (0, _extends2["default"])({}, obj);
  },
  update: function update(obj, propName, propValue) {
    obj[propName] = propValue;
    return (0, _extends2["default"])({}, obj);
  }
};
var _default = imObj;
exports["default"] = _default;
//# sourceMappingURL=im-obj.js.map