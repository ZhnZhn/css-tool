'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _RowInputType = require('./RowInputType1');

var _RowInputType2 = _interopRequireDefault(_RowInputType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var STYLE = {
  ROW_INPUT: {
    width: '100%',
    margin: '16px 16px'
  }
};

var inputRows = [{
  style: STYLE.ROW_INPUT, caption: "Horizontal Length",
  min: -30, max: 30, step: 1, initValue: 10
}, {
  style: STYLE.ROW_INPUT, caption: "Vertical Length",
  min: -30, max: 30, step: 1, initValue: 10
}, {
  style: STYLE.ROW_INPUT, caption: "Blur Radius",
  min: 0, max: 20, step: 1, initValue: 5
}, {
  style: STYLE.ROW_INPUT, caption: "Spread Radius",
  min: -10, max: 20, step: 1, initValue: 0
}];

var InputBoxShadow = function (_Component) {
  _inherits(InputBoxShadow, _Component);

  function InputBoxShadow() {
    _classCallCheck(this, InputBoxShadow);

    return _possibleConstructorReturn(this, (InputBoxShadow.__proto__ || Object.getPrototypeOf(InputBoxShadow)).apply(this, arguments));
  }

  _createClass(InputBoxShadow, [{
    key: 'render',
    value: function render() {
      var style = this.props.style;

      return _react2.default.createElement(
        'div',
        { style: style },
        _react2.default.createElement(_RowInputType2.default, inputRows[0]),
        _react2.default.createElement(_RowInputType2.default, inputRows[1]),
        _react2.default.createElement(_RowInputType2.default, inputRows[2]),
        _react2.default.createElement(_RowInputType2.default, inputRows[3])
      );
    }
  }]);

  return InputBoxShadow;
}(_react.Component);

exports.default = InputBoxShadow;
//# sourceMappingURL=D:\_Dev\_React\_Shadow_Box\js\components\zhn-moleculs\InputBoxShadow.js.map