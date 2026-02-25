"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _tinycolor = _interopRequireDefault(require("../../tinycolor/tinycolor"));
var _uiApi = require("../uiApi");
var _useRefInit = _interopRequireDefault(require("../hooks/useRefInit"));
var _useToggle = _interopRequireDefault(require("../hooks/useToggle"));
var _InputText = _interopRequireDefault(require("../zhn/InputText"));
var _Color = _interopRequireDefault(require("../zhn/Color"));
var _ShowHide = _interopRequireDefault(require("../zhn/ShowHide"));
var _InputNumber = _interopRequireDefault(require("../zhn/InputNumber"));
var _style = require("./style");
var _jsxRuntime = require("preact/jsx-runtime");
const S_HSL = {
    paddingTop: 12,
    paddingBottom: 12,
    borderBottom: '1px solid rgba(0, 0, 0, 0.2)'
  },
  S_HSL_CAPTION = {
    color: 'rgba(0, 0, 0, 0.5)',
    paddingRight: 14
  },
  S_INPUT_NUMBER = {
    width: 50
  };
const _FN_NOOP = () => {};
const _fChangeItem = (propName, refHsl, onEnter, setValue) => value => {
  const _hsl = (0, _uiApi.getRefValue)(refHsl);
  if (_hsl) {
    _hsl[propName] = parseInt('' + value, 10);
    const _color = (0, _tinycolor.default)(_hsl);
    if (_color && _color.isValid()) {
      const _value = _color.toHexString();
      onEnter(_value, _color);
      setValue(_value);
    }
  }
};
const RowInputColorHsl = _ref => {
  let {
    id,
    styleInput,
    caption,
    inputId,
    initValue,
    onEnter = _FN_NOOP
  } = _ref;
  const _refHex = (0, _uiApi.useRef)(null),
    _refH = (0, _uiApi.useRef)(null),
    _refS = (0, _uiApi.useRef)(null),
    _refL = (0, _uiApi.useRef)(null),
    _refHsl = (0, _useRefInit.default)(() => {
      const _color = (0, _tinycolor.default)(initValue);
      return _color.toHsl();
    }),
    [isHsl, toggleIsHsl] = (0, _useToggle.default)(),
    [value, setValue] = (0, _uiApi.useState)(initValue)
    /*eslint-disable react-hooks/exhaustive-deps */,
    _hEnter = (0, _uiApi.useMemo)(() => value => {
      const color = (0, _tinycolor.default)(value);
      if (color && color.isValid()) {
        const hsl = color.toHsl();
        (0, _uiApi.getRefValue)(_refH)?.setValue(hsl.h);
        (0, _uiApi.getRefValue)(_refS)?.setValue(hsl.s);
        (0, _uiApi.getRefValue)(_refL)?.setValue(hsl.l);
        _refHsl.current = hsl;
        onEnter(value, color);
        setValue(color.toHexString());
      }
    }, [onEnter])
    // _refHsl
    ,
    [_hChangeH, _hChangeS, _hChangeL] = (0, _uiApi.useMemo)(() => [_fChangeItem('h', _refHsl, onEnter, setValue), _fChangeItem('s', _refHsl, onEnter, setValue), _fChangeItem('l', _refHsl, onEnter, setValue)], [onEnter])
    // _refHsl
    ,
    _hEnterHslColor = (0, _uiApi.useMemo)(() => () => {
      _refHex.current?.setValue(value);
    }, [value]),
    {
      h,
      s,
      l
    } = (0, _uiApi.useMemo)(() => _refHsl.current, []) || {};
  // _refHsl.current
  /*eslint-enable react-hooks/exhaustive-deps */

  return (0, _jsxRuntime.jsxs)("div", {
    className: _style.CL_ROW,
    children: [(0, _jsxRuntime.jsxs)("label", {
      className: _style.CL_CAPTION,
      children: [(0, _jsxRuntime.jsx)("span", {
        children: caption
      }), (0, _jsxRuntime.jsx)(_InputText.default, {
        innerRef: _refHex,
        id: id,
        style: {
          ..._style.S_TEXT,
          ...styleInput
        },
        initialValue: value,
        onEnter: _hEnter
      }, inputId), (0, _jsxRuntime.jsx)(_Color.default, {
        style: _style.S_COLOR,
        value: value,
        onClick: toggleIsHsl
      })]
    }), (0, _jsxRuntime.jsx)(_ShowHide.default, {
      is: isHsl,
      children: (0, _jsxRuntime.jsxs)("div", {
        style: S_HSL,
        children: [(0, _jsxRuntime.jsx)("span", {
          style: S_HSL_CAPTION,
          children: "HSL"
        }), (0, _jsxRuntime.jsx)(_InputNumber.default, {
          innerRef: _refH,
          style: S_INPUT_NUMBER,
          initialValue: h,
          min: 0,
          max: 360,
          onChange: _hChangeH,
          onEnter: _hEnterHslColor
        }), (0, _jsxRuntime.jsx)(_InputNumber.default, {
          innerRef: _refS,
          style: S_INPUT_NUMBER,
          initialValue: s,
          min: 0,
          max: 100,
          onChange: _hChangeS,
          onEnter: _hEnterHslColor
        }), (0, _jsxRuntime.jsx)(_InputNumber.default, {
          innerRef: _refL,
          style: S_INPUT_NUMBER,
          initialValue: l,
          min: 0,
          max: 100,
          onChange: _hChangeL,
          onEnter: _hEnterHslColor
        })]
      })
    })]
  });
};
var _default = exports.default = RowInputColorHsl;