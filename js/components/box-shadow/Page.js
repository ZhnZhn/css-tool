'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _imArr = require('../../utils/im-arr');

var _imArr2 = _interopRequireDefault(_imArr);

var _imObj = require('../../utils/im-obj');

var _imObj2 = _interopRequireDefault(_imObj);

var _InputBoxShadow = require('./InputBoxShadow');

var _InputBoxShadow2 = _interopRequireDefault(_InputBoxShadow);

var _ViewBoxShadow = require('./ViewBoxShadow');

var _ViewBoxShadow2 = _interopRequireDefault(_ViewBoxShadow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROOT: {
    display: 'flex'
  },
  BOX_SHADOW: {
    display: 'inline-block',
    fontWeight: 'bold',
    width: '25%',
    minWidth: '325px',
    height: '90%'
  },
  RESULT: {
    display: 'inline-block',
    marginLeft: '48px',
    width: '65%',
    height: '90%',
    verticalAlign: 'top'
  }
};

var _initValue = {
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75
};

var _configStyle = {
  bgColor: 'gray',
  boxColor: '#e7a61a',
  boxBorderRadius: '0px'
};

var Page = function (_Component) {
  _inherits(Page, _Component);

  function Page(props) {
    _classCallCheck(this, Page);

    var _this = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this));

    _this._handleChangeInput = function (boxShadow) {
      _this.setState(function (prev) {
        var boxShadows = prev.boxShadows,
            index = prev.index;

        return {
          boxShadows: _imArr2.default.update(boxShadows, index, boxShadow)
        };
      });
    };

    _this._handleOnAdd = function (index) {
      _this.setState(function (prev) {
        var boxShadows = prev.boxShadows,
            index = prev.index,
            value = boxShadows[index],
            _index = index + 1;

        return {
          initValue: _imObj2.default.create(value),
          index: _index,
          boxShadows: _imArr2.default.insert(boxShadows, _index, value)
        };
      });
    };

    _this._handleOnEdit = function (index) {
      _this.setState(function (prev) {
        return {
          initValue: _imObj2.default.create(prev.boxShadows[index]),
          index: index
        };
      });
    };

    _this._handleOnRemove = function (index) {
      if (index !== 0) {
        _this.setState(function (prev) {
          var boxShadows = prev.boxShadows,
              _index = index - 1;

          return {
            index: _index,
            initValue: _imObj2.default.create(boxShadows[_index]),
            boxShadows: _imArr2.default.remove(boxShadows, index)
          };
        });
      }
    };

    _this._handleEnter = function (propName, value) {
      _this.setState(function (prev) {
        var configStyle = prev.configStyle;

        return {
          configStyle: _imObj2.default.update(configStyle, propName, value)
        };
      });
    };

    _this.boxShadow = _initValue;
    _this.index = 0;
    _this.boxShadows = [_initValue];
    _this.state = {
      initValue: _initValue,
      index: 0,
      boxShadows: [_initValue],
      configStyle: _configStyle
    };
    return _this;
  }

  _createClass(Page, [{
    key: 'render',
    value: function render() {
      var _state = this.state,
          initValue = _state.initValue,
          boxShadows = _state.boxShadows,
          index = _state.index,
          configStyle = _state.configStyle;

      return _react2.default.createElement(
        'div',
        { style: STYLE.ROOT },
        _react2.default.createElement(_InputBoxShadow2.default, {
          style: STYLE.BOX_SHADOW,
          initValue: initValue,
          configStyle: configStyle,
          onChange: this._handleChangeInput,
          onEnter: this._handleEnter
        }),
        _react2.default.createElement(_ViewBoxShadow2.default, {
          style: STYLE.RESULT,
          currentIndex: index,
          boxShadows: boxShadows,
          configStyle: configStyle,
          onAdd: this._handleOnAdd,
          onEdit: this._handleOnEdit,
          onRemove: this._handleOnRemove
        })
      );
    }
  }]);

  return Page;
}(_react.Component);

exports.default = Page;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\box-shadow\Page.js.map