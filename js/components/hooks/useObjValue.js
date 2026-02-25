"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useObjValue = initialValue => {
  const [{
      value
    }, setValue] = (0, _uiApi.useState)(() => ({
      value: initialValue
    })),
    _setValue = (0, _uiApi.useCallback)(value => setValue({
      value
    }), []);

  /* eslint-disable react-hooks/exhaustive-deps */
  (0, _uiApi.useEffect)(() => {
    _setValue(initialValue);
  }, [initialValue]);
  /* eslint-enable react-hooks/exhaustive-deps */

  return [value, _setValue];
};
var _default = exports.default = useObjValue;