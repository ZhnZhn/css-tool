"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _A = _interopRequireDefault(require("../zhn/A"));

var CL = "bt-chb";
var S = {
  ROOT: {
    lineHeight: 1.8,
    paddingTop: 6,
    paddingLeft: 16
  }
};

var RowCheckBox = function RowCheckBox(_ref) {
  var value = _ref.value,
      caption = _ref.caption,
      onCheck = _ref.onCheck,
      onUnCheck = _ref.onUnCheck;

  var _toggleValue = (0, _react.useCallback)(function () {
    if (value) {
      onUnCheck();
    } else {
      onCheck();
    }
  }, [value, onUnCheck, onCheck]);

  return _react["default"].createElement("div", {
    style: S.ROOT
  }, _react["default"].createElement(_A["default"].SvgCheckBox, {
    value: value,
    onCheck: onCheck,
    onUnCheck: onUnCheck
  }), caption && _react["default"].createElement("button", {
    className: CL,
    tabIndex: "-1",
    onClick: _toggleValue
  }, caption));
};

var _default = RowCheckBox;
exports["default"] = _default;
//# sourceMappingURL=RowCheckBox.js.map