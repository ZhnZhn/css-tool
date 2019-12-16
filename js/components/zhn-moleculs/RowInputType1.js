"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _math = _interopRequireDefault(require("../../utils/math"));

var _A = _interopRequireDefault(require("../zhn/A"));

var S = {
  RIGHT: {
    "float": 'right'
  },
  LABEL: {
    lineHeight: 1.8
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var RowInputType1 =
/*#__PURE__*/
function (_Component) {
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
      if (_this.isOnChange) {
        _this.props.onChange(value);
      }
    };

    _this._handleChangeSlider = function (event, value) {
      _this.value = value;

      _this.textComp.setValue(value);

      _this._handleOnChange(value);
    };

    _this._handleChangeText = function (value) {
      var _this$props = _this.props,
          min = _this$props.min,
          max = _this$props.max,
          _value = _this.stepExp !== 0 ? _math["default"].round10(parseFloat(value), _this.stepExp) : parseInt(value, 10);

      if (_value >= min && _value <= max) {
        _this.value = _value;

        _this.sliderComp.setValue(_value);

        _this._handleOnChange(value);
      }
    };

    _this._refTextComp = function (c) {
      return _this.textComp = c;
    };

    _this._refSliderComp = function (c) {
      return _this.sliderComp = c;
    };

    _this.isOnChange = _isFn(props.onChange);

    var _arr = ('' + props.step).split('.');

    _this.stepExp = _arr[1] ? -1 * _arr[1].length : 0;
    return _this;
  }

  var _proto = RowInputType1.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        style = _this$props2.style,
        styleInput = _this$props2.styleInput,
        caption = _this$props2.caption,
        initValue = _this$props2.initValue,
        unit = _this$props2.unit,
        rest = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["style", "styleInput", "caption", "initValue", "unit"]);
    return _react["default"].createElement("div", {
      style: style
    }, _react["default"].createElement("label", {
      style: S.LABEL
    }, _react["default"].createElement("span", null, caption), _react["default"].createElement("span", {
      style: S.RIGHT
    }, unit), _react["default"].createElement(_A["default"].InputText, {
      ref: this._refTextComp,
      style: (0, _extends2["default"])({}, S.RIGHT, {}, styleInput),
      initValue: initValue,
      onChange: this._handleChangeText
    })), _react["default"].createElement(_A["default"].InputSlider, (0, _extends2["default"])({
      ref: this._refSliderComp
    }, rest, {
      initValue: initValue,
      onChange: this._handleChangeSlider
    })));
  };

  return RowInputType1;
}(_react.Component);

RowInputType1.defaultProps = {
  unit: 'px',
  step: 1
};
var _default = RowInputType1;
exports["default"] = _default;
//# sourceMappingURL=RowInputType1.js.map