'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RowInputType = require('../zhn-moleculs/RowInputType1');

var _RowInputType2 = _interopRequireDefault(_RowInputType);

var _RowInputType3 = require('../zhn-moleculs/RowInputType2');

var _RowInputType4 = _interopRequireDefault(_RowInputType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  },
  BOX_INPUT: {
    color: 'brown'
  }
};

var inputRows = [{
  style: STYLE.ROW_INPUT, caption: "Horizontal Length",
  min: -30, max: 30, step: 1, unit: 'px'
}, {
  style: STYLE.ROW_INPUT, caption: "Vertical Length",
  min: -30, max: 30, step: 1, unit: 'px'
}, {
  style: STYLE.ROW_INPUT, caption: "Blur Radius",
  min: 0, max: 20, step: 1, unit: 'px'
}, {
  style: STYLE.ROW_INPUT, caption: "Spread Radius",
  min: -10, max: 20, step: 1, unit: 'px'
}, {
  style: STYLE.ROW_INPUT, caption: "Opacity",
  min: 0, max: 1, step: 0.01, unit: ''
}];

var InputBoxShadow = function (_Component) {
  _inherits(InputBoxShadow, _Component);

  function InputBoxShadow(props) {
    _classCallCheck(this, InputBoxShadow);

    var _this = _possibleConstructorReturn(this, (InputBoxShadow.__proto__ || Object.getPrototypeOf(InputBoxShadow)).call(this));

    _this._getBoxShadow = function () {
      return {
        vLength: _this.vLength,
        gLength: _this.gLength,
        blurR: _this.blurR,
        spreadR: _this.spreadR,
        opacity: _this.opacity
      };
    };

    _this._handleChangeInput = function (propName, value) {
      _this[propName] = value;
      if (_this.props.onChange) {
        _this.props.onChange(_this._getBoxShadow());
      }
    };

    _this._handleEnter = function (propName, value) {
      console.log(propName);
      console.log(value);
      if (_this.props.onEnter) {
        _this.props.onEnter(propName, value);
      }
    };

    var _props$initValue = props.initValue,
        vLength = _props$initValue.vLength,
        gLength = _props$initValue.gLength,
        blurR = _props$initValue.blurR,
        spreadR = _props$initValue.spreadR,
        opacity = _props$initValue.opacity;

    _this.vLength = vLength;
    _this.gLength = gLength;
    _this.blurR = blurR;
    _this.spreadR = spreadR;
    _this.opacity = opacity;
    return _this;
  }

  _createClass(InputBoxShadow, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props !== nextProps && this.props.initValue !== nextProps.initValue) {
        var _nextProps$initValue = nextProps.initValue,
            vLength = _nextProps$initValue.vLength,
            gLength = _nextProps$initValue.gLength,
            blurR = _nextProps$initValue.blurR,
            spreadR = _nextProps$initValue.spreadR,
            opacity = _nextProps$initValue.opacity;

        this.vLength = vLength;
        this.gLength = gLength;
        this.blurR = blurR;
        this.spreadR = spreadR;
        this.opacity = opacity;
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.props !== nextProps && this.props.initValue === nextProps.initValue) {
        //console.log('skip Input render');
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          style = _props.style,
          initValue = _props.initValue,
          configStyle = _props.configStyle,
          vLength = initValue.vLength,
          gLength = initValue.gLength,
          blurR = initValue.blurR,
          spreadR = initValue.spreadR,
          opacity = initValue.opacity,
          bgColor = configStyle.bgColor,
          boxColor = configStyle.boxColor,
          boxBorderRadius = configStyle.boxBorderRadius;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_RowInputType2.default, _extends({}, inputRows[0], {
          initValue: vLength,
          onChange: this._handleChangeInput.bind(this, 'vLength')
        })),
        _react2.default.createElement(_RowInputType2.default, _extends({}, inputRows[1], {
          initValue: gLength,
          onChange: this._handleChangeInput.bind(this, 'gLength')
        })),
        _react2.default.createElement(_RowInputType2.default, _extends({}, inputRows[2], {
          initValue: blurR,
          onChange: this._handleChangeInput.bind(this, 'blurR')
        })),
        _react2.default.createElement(_RowInputType2.default, _extends({}, inputRows[3], {
          initValue: spreadR,
          onChange: this._handleChangeInput.bind(this, 'spreadR')
        })),
        _react2.default.createElement(_RowInputType4.default, {
          style: STYLE.ROW_INPUT,
          caption: 'Shadow Color',
          initValue: '#000000'
        }),
        _react2.default.createElement(_RowInputType2.default, _extends({}, inputRows[4], {
          initValue: opacity,
          onChange: this._handleChangeInput.bind(this, 'opacity')
        })),
        _react2.default.createElement(_RowInputType4.default, {
          style: STYLE.ROW_INPUT,
          styleInput: STYLE.BOX_INPUT,
          caption: 'Background Color',
          initValue: bgColor,
          onEnter: this._handleEnter.bind(this, 'bgColor')
        }),
        _react2.default.createElement(_RowInputType4.default, {
          style: STYLE.ROW_INPUT,
          styleInput: STYLE.BOX_INPUT,
          caption: 'Box Color',
          initValue: boxColor,
          onEnter: this._handleEnter.bind(this, 'boxColor')
        }),
        _react2.default.createElement(_RowInputType4.default, {
          style: STYLE.ROW_INPUT,
          styleInput: STYLE.BOX_INPUT,
          caption: 'Box Border Radius',
          initValue: boxBorderRadius,
          onEnter: this._handleEnter.bind(this, 'boxBorderRadius')
        })
      );
    }
  }]);

  return InputBoxShadow;
}(_react.Component);

exports.default = InputBoxShadow;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\InputBoxShadow.js.map