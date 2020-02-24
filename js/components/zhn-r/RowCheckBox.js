"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _preact = require("preact");

var _hooks = _interopRequireDefault(require("../hooks"));

var _A = _interopRequireDefault(require("../zhn/A"));

var _style = _interopRequireDefault(require("./style"));

var useCallback = _hooks["default"].useCallback;
var S = {
  ROW: {
    marginTop: 6
  }
};

var RowCheckBox = function RowCheckBox(_ref) {
  var value = _ref.value,
      caption = _ref.caption,
      onCheck = _ref.onCheck,
      onUnCheck = _ref.onUnCheck;

  var _toggleValue = useCallback(function () {
    if (value) {
      onUnCheck();
    } else {
      onCheck();
    }
  }, [value, onUnCheck, onCheck]);

  return (0, _preact.h)("div", {
    className: _style["default"].CL_ROW,
    style: S.ROW
  }, (0, _preact.h)(_A["default"].SvgCheckBox, {
    value: value,
    onCheck: onCheck,
    onUnCheck: onUnCheck
  }), caption && (0, _preact.h)("button", {
    className: _style["default"].CL_CHB_BT,
    tabIndex: "-1",
    onClick: _toggleValue
  }, caption));
};

var _default = RowCheckBox;
exports["default"] = _default;
//# sourceMappingURL=RowCheckBox.js.map