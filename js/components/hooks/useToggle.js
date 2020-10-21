"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _hooks = _interopRequireDefault(require("../hooks"));

var useState = _hooks["default"].useState,
    useCallback = _hooks["default"].useCallback;

var useToggle = function useToggle(initialValue) {
  var _useState = useState(initialValue),
      is = _useState[0],
      setIs = _useState[1],
      toggle = useCallback(function () {
    return setIs(function (v) {
      return !v;
    });
  }, []);

  return [is, toggle];
};

var _default = useToggle;
exports["default"] = _default;
//# sourceMappingURL=useToggle.js.map