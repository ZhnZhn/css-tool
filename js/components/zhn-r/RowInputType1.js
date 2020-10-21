"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("preact/jsx-runtime");

var _preact = require("preact");

var _math = _interopRequireDefault(require("../../utils/math"));

var _A = _interopRequireDefault(require("../zhn/A"));

var _style = _interopRequireDefault(require("./style"));

var round10 = _math["default"].round10;

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var RowInputType1 = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(RowInputType1, _Component);

  /*
   static propTypes = {
     style: PropTypes.object,
     styleInput: PropTypes.object,
       caption: PropTypes.string,
     initValue: PropTypes.number,
     min: PropTypes.number,
     max: PropTypes.number,
     step: PropTypes.number,
     unit: PropTypes.string,
       onChange: PropTypes.func
   }
   */
  function RowInputType1(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleOnChange = function (value) {
      var onChange = _this.props.onChange;

      if (_isFn(onChange)) {
        onChange(value);
      }
    };

    _this._handleChangeSlider = function (event, value) {
      _this.value = value;

      _this._refTextComp.current.setValue(value);

      _this._handleOnChange(value);
    };

    _this._handleChangeText = function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          _value = _this.stepExp !== 0 ? round10(parseFloat(value), _this.stepExp) : parseInt(value, 10);

      if (_value >= min && _value <= max) {
        _this.value = _value;

        _this._refSliderComp.current.setValue(_value);

        _this._handleOnChange(value);
      }
    };

    _this._refTextComp = (0, _preact.createRef)();
    _this._refSliderComp = (0, _preact.createRef)();

    var _arr = ('' + props.step).split('.');

    _this.stepExp = _arr[1] ? -1 * _arr[1].length : 0;
    return _this;
  }

  var _proto = RowInputType1.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        styleInput = _this$props2.styleInput,
        name = _this$props2.name,
        caption = _this$props2.caption,
        initValue = _this$props2.initValue,
        inputId = _this$props2.inputId,
        unit = _this$props2.unit,
        min = _this$props2.min,
        max = _this$props2.max,
        step = _this$props2.step,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["styleInput", "name", "caption", "initValue", "inputId", "unit", "min", "max", "step"]);
    return (0, _jsxRuntime.jsxs)("div", {
      className: _style["default"].CL_ROW,
      children: [(0, _jsxRuntime.jsxs)("label", {
        className: _style["default"].CL_CAPTION,
        children: [(0, _jsxRuntime.jsx)("span", {
          children: caption
        }), (0, _jsxRuntime.jsx)("span", {
          style: _style["default"].RIGHT,
          children: unit
        }), (0, _jsxRuntime.jsx)(_A["default"].InputText, {
          innerRef: this._refTextComp,
          style: (0, _extends2["default"])({}, _style["default"].RIGHT, styleInput),
          type: "number",
          name: name,
          inputId: inputId,
          initValue: initValue,
          step: step,
          min: min,
          max: max,
          onChange: this._handleChangeText
        })]
      }), (0, _jsxRuntime.jsx)(_A["default"].InputSlider, (0, _extends2["default"])({
        ref: this._refSliderComp
      }, rest, {
        inputId: inputId,
        step: step,
        min: min,
        max: max,
        initValue: initValue,
        onChange: this._handleChangeSlider
      }))]
    });
  };

  return RowInputType1;
}(_preact.Component);

RowInputType1.defaultProps = {
  unit: 'px',
  step: 1
};
var _default = RowInputType1;
exports["default"] = _default;
//# sourceMappingURL=RowInputType1.js.map