"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.CL_INPUT = void 0;
exports.useInputValue = useInputValue;
var _crId = _interopRequireDefault(require("../../utils/crId"));
var _uiApi = require("../uiApi");
var _useObjValue = _interopRequireDefault(require("../hooks/useObjValue"));
const CL_INPUT = exports.CL_INPUT = 'input-text box-shadow';
const _FN_NOOP = () => {};
const _DF_GET_VALUE = v => [v, true];
function useInputValue(props, getValue) {
  if (getValue === void 0) {
    getValue = _DF_GET_VALUE;
  }
  const {
      innerRef,
      id,
      initialValue,
      onEnter = _FN_NOOP,
      onChange = _FN_NOOP
    } = props,
    _refId = (0, _uiApi.useRef)(id || (0, _crId.default)()),
    [value, setValue] = (0, _useObjValue.default)(initialValue),
    hKeyDown = (0, _uiApi.useCallback)(evt => {
      if (evt.keyCode === 13) {
        onEnter(evt.currentTarget.value);
      }
    }, [onEnter])
    /*eslint-disable react-hooks/exhaustive-deps */,
    hInputChange = (0, _uiApi.useCallback)(evt => {
      const {
          value
        } = evt.currentTarget,
        [_value, isOnChange] = getValue(value);
      setValue(_value);
      if (isOnChange) {
        onChange(_value);
      }
    }, [getValue, onChange]);
  // setValue   

  (0, _uiApi.useImperativeHandleOr)(innerRef, () => ({
    setValue: nextValue => {
      const [value, isOnChange] = getValue(nextValue);
      if (isOnChange) {
        setValue(value);
      }
    }
  }), [getValue]);
  // setValue
  /*eslint-enable react-hooks/exhaustive-deps */

  return [_refId.current, value, hKeyDown, hInputChange];
}