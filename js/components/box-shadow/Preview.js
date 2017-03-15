'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fn = require('./helpers/fn');

var _fn2 = _interopRequireDefault(_fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROOT: {
    width: '100%',
    height: '430px',
    paddingTop: '24px'
  },
  INNER: {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: '250px',
    resize: 'both',
    overflow: 'auto'
  }
};

var _fnToStyle = function _fnToStyle(boxShadows) {
  var values = boxShadows.map(function (value) {
    return _fn2.default.toCssValue(value);
  });
  return {
    boxShadow: values.join(',')
  };
};

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).apply(this, arguments));
  }

  _createClass(Preview, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          boxShadows = _props.boxShadows,
          configStyle = _props.configStyle,
          _style = _fnToStyle(boxShadows),
          _rootStyle = { backgroundColor: configStyle.bgColor },
          _boxStyle = {
        backgroundColor: configStyle.boxColor,
        borderRadius: configStyle.boxBorderRadius
      };

      return _react2.default.createElement(
        'div',
        { style: _extends({}, STYLE.ROOT, _rootStyle) },
        _react2.default.createElement('div', { style: _extends({}, STYLE.INNER, _boxStyle, _style) })
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  boxShadows: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    gLength: _react.PropTypes.number,
    vLength: _react.PropTypes.number,
    blurR: _react.PropTypes.number,
    spreadR: _react.PropTypes.number,
    opacity: _react.PropTypes.number
  })),
  configStyle: _react.PropTypes.shape({
    bgColor: _react.PropTypes.string,
    boxColor: _react.PropTypes.string,
    borderRadius: _react.PropTypes.string
  })
};
exports.default = Preview;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\Preview.js.map