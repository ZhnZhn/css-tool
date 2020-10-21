"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("preact/jsx-runtime");

var _hooks = _interopRequireDefault(require("../hooks"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var useState = _hooks["default"].useState,
    useRef = _hooks["default"].useRef,
    useCallback = _hooks["default"].useCallback,
    useEffect = _hooks["default"].useEffect,
    useImperativeHandle = _hooks["default"].useImperativeHandle;
var S = {
  INPUT_TEXT: {
    display: 'inline',
    color: 'green',
    height: 32,
    width: 45,
    paddingLeft: 5,
    marginLeft: 5,
    marginRight: 5,
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#e1e1cb',
    border: 'medium none',
    outline: 'medium none',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};
var DF_TEXT_PROPS = {
  autoCorrect: "off",
  autoCapitalize: "off",
  spellCheck: false,
  translate: false,
  maxLength: 25
};

var InputText = function InputText(_ref) {
  var style = _ref.style,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'string' : _ref$type,
      name = _ref.name,
      _ref$initValue = _ref.initValue,
      initValue = _ref$initValue === void 0 ? '' : _ref$initValue,
      inputId = _ref.inputId,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? -10 : _ref$min,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 10 : _ref$max,
      innerRef = _ref.innerRef,
      _ref$onChange = _ref.onChange,
      onChange = _ref$onChange === void 0 ? function () {} : _ref$onChange,
      _ref$onEnter = _ref.onEnter,
      onEnter = _ref$onEnter === void 0 ? function () {} : _ref$onEnter;

  var _useState = useState(),
      value = _useState[0],
      setValue = _useState[1],
      _refName = useRef(name || (0, _crId["default"])()),
      _handleInputChange = useCallback(function (event) {
    var value = event.target.value;
    setValue(value);
    onChange(value);
  }, []),
      _handleKeyDown = useCallback(function (event) {
    if (event.keyCode === 13) {
      onEnter(event.target.value);
    }
  }, []);

  useEffect(function () {
    setValue(initValue);
  }, [inputId]);
  useImperativeHandle(innerRef, function () {
    return {
      setValue: setValue
    };
  });

  var _textProps = type === 'text' ? DF_TEXT_PROPS : void 0,
      _numberProps = type === 'number' ? {
    min: min,
    max: max,
    step: step
  } : void 0;

  return (0, _jsxRuntime.jsx)("input", (0, _extends2["default"])({
    type: type,
    name: _refName.current
  }, _textProps, _numberProps, {
    style: (0, _extends2["default"])({}, S.INPUT_TEXT, style),
    value: value //onChange={_handleInputChange}
    ,
    onInput: _handleInputChange,
    onKeyDown: _handleKeyDown
  }));
};

var _default = InputText;
exports["default"] = _default;
//# sourceMappingURL=InputText.js.map