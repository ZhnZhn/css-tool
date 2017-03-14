"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var imObj = {
  create: function create(obj) {
    return _extends({}, obj);
  },
  update: function update(obj, propName, propValue) {
    obj[propName] = propValue;
    return _extends({}, obj);
  }
};

exports.default = imObj;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\utils\im-obj.js.map