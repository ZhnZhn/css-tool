"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("preact/jsx-runtime");

var _hooks = _interopRequireDefault(require("../hooks"));

var _A = _interopRequireDefault(require("../zhn/A"));

var _style = _interopRequireDefault(require("./style"));

var useCallback = _hooks["default"].useCallback;
var S = {
  ROW: {
    lineHeight: 'unset',
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

  return (0, _jsxRuntime.jsxs)("div", {
    className: _style["default"].CL_ROW,
    style: S.ROW,
    children: [(0, _jsxRuntime.jsx)(_A["default"].SvgCheckBox, {
      value: value,
      onCheck: onCheck,
      onUnCheck: onUnCheck
    }), caption && (0, _jsxRuntime.jsx)("button", {
      className: _style["default"].CL_CHB_BT,
      tabIndex: "-1",
      onClick: _toggleValue,
      children: caption
    })]
  });
};

var _default = RowCheckBox;
exports["default"] = _default;
//# sourceMappingURL=RowCheckBox.js.map