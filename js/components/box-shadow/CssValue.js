'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RaisedButton = require('../zhn/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _fn = require('./helpers/fn');

var _fn2 = _interopRequireDefault(_fn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROOT: {
    paddingTop: '16px'
  },
  TITLE: {
    color: '#80c040',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  VALUE: {
    fontSize: '20px',
    color: 'darkslateblue'
  },
  EDITED: {
    borderBottom: '2px solid green'
  },
  BT: {
    width: '70px'
  },
  BT_R: {
    width: '100px'
  }
};

var CssValue = function (_Component) {
  _inherits(CssValue, _Component);

  function CssValue() {
    _classCallCheck(this, CssValue);

    return _possibleConstructorReturn(this, (CssValue.__proto__ || Object.getPrototypeOf(CssValue)).apply(this, arguments));
  }

  _createClass(CssValue, [{
    key: '_renderValues',
    value: function _renderValues(options) {
      var _options$boxShadows = options.boxShadows,
          boxShadows = _options$boxShadows === undefined ? [] : _options$boxShadows,
          currentIndex = options.currentIndex,
          onAdd = options.onAdd,
          onEdit = options.onEdit,
          onRemove = options.onRemove;

      var max = boxShadows.length - 1;
      return boxShadows.map(function (item, index) {
        var _sufix = index !== max ? "," : ";",
            _styleValue = index === currentIndex ? STYLE.EDITED : null;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'span',
            { style: _extends({}, STYLE.VALUE, _styleValue) },
            '' + _fn2.default.toCssValue(item) + _sufix
          ),
          _react2.default.createElement(_RaisedButton2.default, {
            style: STYLE.BT,
            caption: 'EDIT',
            onClick: onEdit.bind(null, index)
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            style: STYLE.BT,
            caption: 'ADD',
            onClick: onAdd.bind(null, index)
          }),
          _react2.default.createElement(_RaisedButton2.default, {
            style: STYLE.BT_R,
            caption: 'REMOVE',
            onClick: onRemove.bind(null, index)
          })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement(
          'div',
          { style: STYLE.TITLE },
          'BOX-SHADOW:'
        ),
        this._renderValues(this.props)
      );
    }
  }]);

  return CssValue;
}(_react.Component);

CssValue.propTypes = {
  boxShadows: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    gLength: _react.PropTypes.number,
    vLength: _react.PropTypes.number,
    blurR: _react.PropTypes.number,
    spreadR: _react.PropTypes.number,
    opacity: _react.PropTypes.number
  })),
  currentIndex: _react.PropTypes.number,
  onAdd: _react.PropTypes.func,
  onEdit: _react.PropTypes.func,
  onRemove: _react.PropTypes.func
};
exports.default = CssValue;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\CssValue.js.map