"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _Comp = _interopRequireDefault(require("../Comp"));

var S = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  },
  INPUT_OPACITY: {
    width: '50px'
  }
};
var inputRows = [{
  style: S.ROW_INPUT,
  caption: "Horizontal Length",
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Vertical Length",
  min: -30,
  max: 30,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Blur Radius",
  min: 0,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Spread Radius",
  min: -10,
  max: 20,
  step: 1,
  unit: 'px'
}, {
  style: S.ROW_INPUT,
  caption: "Opacity",
  min: 0,
  max: 1,
  step: 0.01,
  unit: ''
}];

var InputBoxShadow =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputBoxShadow, _Component);

  /*
   static propTypes = {
      initValue: PropTypes.shape({
        vLength: PropTypes.number,
        gLength: PropTypes.number,
        blurR: PropTypes.number,
        spreadR: PropTypes.number,
        color: PropTypes.string,
        opacity: PropTypes.number
      }),
      onChange: PropTypes.func,
      onEnter: PropTypes.func
   }
   */
  function InputBoxShadow(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._getBoxShadow = function () {
      return {
        vLength: _this.vLength,
        gLength: _this.gLength,
        blurR: _this.blurR,
        spreadR: _this.spreadR,
        color: _this.color,
        opacity: _this.opacity
      };
    };

    _this._handleChangeInput = function (propName, value) {
      _this[propName] = value;

      _this.props.onChange(_this._getBoxShadow());
    };

    _this._handleEnter = function (propName, value) {
      _this.props.onEnter(propName, value);
    };

    _this._handleEnterColor = function (value, color) {
      _this.color = color.toHexString();

      _this.props.onChange(_this._getBoxShadow());
    };

    var _props$initValue = props.initValue,
        vLength = _props$initValue.vLength,
        gLength = _props$initValue.gLength,
        blurR = _props$initValue.blurR,
        spreadR = _props$initValue.spreadR,
        _color = _props$initValue.color,
        opacity = _props$initValue.opacity;
    _this.vLength = vLength;
    _this.gLength = gLength;
    _this.blurR = blurR;
    _this.spreadR = spreadR;
    _this.color = _color;
    _this.opacity = opacity;
    return _this;
  }

  var _proto = InputBoxShadow.prototype;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps && this.props.initValue !== nextProps.initValue) {
      var _nextProps$initValue = nextProps.initValue,
          vLength = _nextProps$initValue.vLength,
          gLength = _nextProps$initValue.gLength,
          blurR = _nextProps$initValue.blurR,
          spreadR = _nextProps$initValue.spreadR,
          color = _nextProps$initValue.color,
          opacity = _nextProps$initValue.opacity;
      this.vLength = vLength;
      this.gLength = gLength;
      this.blurR = blurR;
      this.spreadR = spreadR;
      this.color = color;
      this.opacity = opacity;
    }
  };

  _proto.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps && this.props.initValue === nextProps.initValue) {
      //console.log('skip Input render');
      return false;
    }

    return true;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        style = _this$props.style,
        initValue = _this$props.initValue,
        configStyle = _this$props.configStyle,
        vLength = initValue.vLength,
        gLength = initValue.gLength,
        blurR = initValue.blurR,
        spreadR = initValue.spreadR,
        opacity = initValue.opacity,
        color = initValue.color,
        bgColor = configStyle.bgColor,
        boxColor = configStyle.boxColor,
        boxBorderRadius = configStyle.boxBorderRadius;
    return _react["default"].createElement("div", {
      style: style
    }, _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[0], {
      initValue: vLength,
      onChange: this._handleChangeInput.bind(this, 'vLength')
    })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[1], {
      initValue: gLength,
      onChange: this._handleChangeInput.bind(this, 'gLength')
    })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[2], {
      initValue: blurR,
      onChange: this._handleChangeInput.bind(this, 'blurR')
    })), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[3], {
      initValue: spreadR,
      onChange: this._handleChangeInput.bind(this, 'spreadR')
    })), _react["default"].createElement(_Comp["default"].RowInputType3, {
      style: S.ROW_INPUT,
      caption: "Shadow Color",
      initValue: color,
      onEnter: this._handleEnterColor
    }), _react["default"].createElement(_Comp["default"].RowInputType1, (0, _extends2["default"])({}, inputRows[4], {
      initValue: opacity,
      styleInput: S.INPUT_OPACITY,
      onChange: this._handleChangeInput.bind(this, 'opacity')
    })), _react["default"].createElement(_Comp["default"].RowInputType3, {
      style: S.ROW_INPUT,
      styleInput: S.BOX_INPUT,
      caption: "Wrapper Background",
      initValue: bgColor,
      onEnter: this._handleEnter.bind(this, 'bgColor')
    }), _react["default"].createElement(_Comp["default"].RowInputType3, {
      style: S.ROW_INPUT,
      styleInput: S.BOX_INPUT,
      caption: "Box Background",
      initValue: boxColor,
      onEnter: this._handleEnter.bind(this, 'boxColor')
    }), _react["default"].createElement(_Comp["default"].RowInputType2, {
      style: S.ROW_INPUT,
      styleInput: S.BOX_INPUT,
      caption: "Box Border Radius",
      initValue: boxBorderRadius,
      onEnter: this._handleEnter.bind(this, 'boxBorderRadius')
    }));
  };

  return InputBoxShadow;
}(_react.Component);

InputBoxShadow.defaultProps = {
  onChange: function onChange() {},
  onEnter: function onEnter() {}
};
var _default = InputBoxShadow;
exports["default"] = _default;
//# sourceMappingURL=InputBoxShadow.js.map