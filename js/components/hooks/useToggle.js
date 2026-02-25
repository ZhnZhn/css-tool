"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useToggle = initialValue => {
  const [is, setIs] = (0, _uiApi.useState)(() => !!initialValue),
    toggle = (0, _uiApi.useCallback)(() => setIs(v => !v), []);
  return [is, toggle];
};
var _default = exports.default = useToggle;