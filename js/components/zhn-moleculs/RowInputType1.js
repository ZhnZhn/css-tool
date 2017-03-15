'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _InputSlider = require('../zhn/InputSlider');

var _InputSlider2 = _interopRequireDefault(_InputSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  RIGHT: {
    float: 'right'
  }
};

var RowInputType1 = function (_Component) {
  _inherits(RowInputType1, _Component);

  function RowInputType1(props) {
    _classCallCheck(this, RowInputType1);

    var _this = _possibleConstructorReturn(this, (RowInputType1.__proto__ || Object.getPrototypeOf(RowInputType1)).call(this));

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
          _value = parseInt(value, 10);

      if (_value >= min && _value <= max) {
        _this.value = _value;
        _this.sliderComp.setValue(_value);
        _this._handleOnChange(value);
      }
    };

    _this.isOnChange = typeof props.onChange === 'function' ? true : false;
    return _this;
  }

  _createClass(RowInputType1, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          caption = _props.caption,
          initValue = _props.initValue,
          unit = _props.unit,
          rest = _objectWithoutProperties(_props, ['style', 'caption', 'initValue', 'unit']);

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(
          'label',
          { style: { lineHeight: 1.8 } },
          _react2.default.createElement(
            'span',
            null,
            caption
          ),
          _react2.default.createElement(
            'span',
            { style: STYLE.RIGHT },
            unit
          ),
          _react2.default.createElement(_InputText2.default, {
            ref: function ref(c) {
              return _this2.textComp = c;
            },
            style: STYLE.RIGHT,
            initValue: initValue,
            onChange: this._handleChangeText
          })
        ),
        _react2.default.createElement(_InputSlider2.default, _extends({
          ref: function ref(c) {
            return _this2.sliderComp = c;
          }
        }, rest, {
          initValue: initValue,
          onChange: this._handleChangeSlider
        }))
      );
    }
  }]);

  return RowInputType1;
}(_react.Component);

RowInputType1.propTypes = {
  style: _react.PropTypes.object,
  caption: _react.PropTypes.string,
  initValue: _react.PropTypes.number,
  unit: _react.PropTypes.string,
  onChange: _react.PropTypes.func
};
RowInputType1.defaultProps = {
  unit: 'px'
};
exports.default = RowInputType1;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn-moleculs\RowInputType1.js.map