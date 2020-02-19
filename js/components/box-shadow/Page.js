"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _crId = _interopRequireDefault(require("../../utils/crId"));

var _imArr = _interopRequireDefault(require("../../utils/im-arr"));

var _imObj = _interopRequireDefault(require("../../utils/im-obj"));

var _InputBoxShadow = _interopRequireDefault(require("./InputBoxShadow"));

var _ViewBoxShadow = _interopRequireDefault(require("./ViewBoxShadow"));

var S = {
  ROOT: {
    display: 'flex'
  },
  BOX_SHADOW: {
    display: 'inline-block',
    width: '25%',
    minWidth: 325,
    height: '90%',
    fontWeight: 'bold'
  },
  RESULT: {
    display: 'inline-block',
    width: '65%',
    height: '90%',
    marginLeft: 48,
    verticalAlign: 'top'
  }
};
var _initValue = {
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75,
  id: (0, _crId["default"])()
};
var _configStyle = {
  bgColor: 'gray',
  boxColor: '#e7a61a',
  boxBorderRadius: '0px'
};

var Page =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Page, _Component);

  function Page(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleChangeInput = function (boxShadow) {
      _this.setState(function (prev) {
        var boxShadows = prev.boxShadows,
            index = prev.index;
        return {
          boxShadows: _imArr["default"].update(boxShadows, index, boxShadow)
        };
      });
    };

    _this._handleOnAdd = function (index) {
      _this.setState(function (prev) {
        var boxShadows = prev.boxShadows,
            index = prev.index,
            value = boxShadows[index],
            initValue = _imObj["default"].create(value),
            _index = index + 1;

        initValue.id = (0, _crId["default"])(_index);
        return {
          initValue: initValue,
          index: _index,
          boxShadows: _imArr["default"].insert(boxShadows, _index, initValue)
        };
      });
    };

    _this._handleOnEdit = function (index) {
      _this.setState(function (prev) {
        return {
          initValue: _imObj["default"].create(prev.boxShadows[index]),
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
            initValue: _imObj["default"].create(boxShadows[_index]),
            boxShadows: _imArr["default"].remove(boxShadows, index)
          };
        });
      }
    };

    _this._handleEnter = function (propName, value) {
      _this.setState(function (prev) {
        var configStyle = prev.configStyle;
        return {
          configStyle: _imObj["default"].update(configStyle, propName, value)
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

  var _proto = Page.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        isShadow = _this$props.isShadow,
        isBox = _this$props.isBox,
        _this$state = this.state,
        initValue = _this$state.initValue,
        boxShadows = _this$state.boxShadows,
        index = _this$state.index,
        configStyle = _this$state.configStyle;
    return _react["default"].createElement("div", {
      style: S.ROOT
    }, _react["default"].createElement(_InputBoxShadow["default"], {
      style: S.BOX_SHADOW,
      isShadow: isShadow,
      isBox: isBox,
      initValue: initValue,
      configStyle: configStyle,
      onChange: this._handleChangeInput,
      onEnter: this._handleEnter
    }), _react["default"].createElement(_ViewBoxShadow["default"], {
      style: S.RESULT,
      currentIndex: index,
      boxShadows: boxShadows,
      configStyle: configStyle,
      onAdd: this._handleOnAdd,
      onEdit: this._handleOnEdit,
      onRemove: this._handleOnRemove
    }));
  };

  return Page;
}(_react.Component);

var _default = Page;
exports["default"] = _default;
//# sourceMappingURL=Page.js.map