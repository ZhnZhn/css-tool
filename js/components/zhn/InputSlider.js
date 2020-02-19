"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _has = _interopRequireDefault(require("../has"));

/*
 Mostly from old version Material-UI
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/
var HAS_TOUCH = _has["default"].HAS_TOUCH;
var S = {
  ROOT: {
    position: 'relative',
    height: 18,
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    userSelect: 'none',
    cursor: 'default'
  },
  ROOT_LINE: {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2
  },
  LINE_BEFORE: {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 'calc(15%)',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_AFTER: {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 'calc(85%)',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  LINE_HOVERED: {
    backgroundColor: 'rgb(158, 158, 158)'
  },
  ROOT_CIRCLE: {
    boxSizing: 'borderBox',
    position: 'absolute',
    top: 0,
    left: '15%',
    zIndex: 1,
    width: 12,
    height: 12,
    margin: '1px 0px 0px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    cursor: 'pointer',
    pointerEvents: 'inherit',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  CIRCLE_DRAGGED: {
    width: 20,
    height: 20
  },
  CIRCLE_INNER: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 12,
    width: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL: {
    position: 'absolute',
    top: -12,
    left: -12,
    height: 36,
    width: '300%',
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    transform: 'scale(1)'
  },
  EMBER: {
    top: -12,
    left: -12,
    height: 44,
    width: '220%',
    border: '1px solid #4caf50'
  }
};

var _isFn = function _isFn(fn) {
  return typeof fn === 'function';
};

var _round10 = function _round10(value, exp) {
  value = +value;
  exp = +exp; // If the value is not a number or the exp is not an integer...

  if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
    return NaN;
  } // Shift


  value = value.toString().split('e');
  value = Math.round(+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp))); // Shift back

  value = value.toString().split('e');
  return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
};

var _addStep = function _addStep(value, step, exp) {
  return exp ? _round10(value + step, exp) : value + step;
};

var _toPercent = function _toPercent(value, min, max) {
  var _percent = (value - min) / (max - min);

  return isNaN(_percent) ? 0 : _percent * 100;
};

var _crWidthCalc = function _crWidthCalc(percent) {
  return {
    width: "calc(" + percent + "%)"
  };
};

var _crLeftPercent = function _crLeftPercent(percent) {
  return {
    left: percent + "%"
  };
};

var _crEventNames = function _crEventNames() {
  return HAS_TOUCH ? {
    moveEvent: 'touchmove',
    upEvent: 'touchend'
  } : {
    moveEvent: 'mousemove',
    upEvent: 'mouseup'
  };
};

var _getClientX = function _getClientX(event) {
  var _event$changedTouches;

  return HAS_TOUCH ? (_event$changedTouches = event.changedTouches[0]) == null ? void 0 : _event$changedTouches.clientX : event.clientX;
};

var InputSlider =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(InputSlider, _Component);

  /*
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }
  */
  function InputSlider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._handleMouseEnter = function () {
      _this.setState({
        hovered: true
      });
    };

    _this._handleMouseLeave = function () {
      _this.setState({
        hovered: false
      });
    };

    _this._handleMouseDown = function (event) {
      // Cancel text selection
      if (!HAS_TOUCH) {
        event.preventDefault();
      }

      var _crEventNames2 = _crEventNames(),
          moveEvent = _crEventNames2.moveEvent,
          upEvent = _crEventNames2.upEvent;

      document.addEventListener(moveEvent, _this._handleDragMouseMove);
      document.addEventListener(upEvent, _this._handleDragMouseUp);

      _this.setState({
        dragged: true
      });
    };

    _this._handleDragMouseMove = function (event) {
      _this._onDragUpdate(event);
    };

    _this._handleDragMouseUp = function () {
      var _crEventNames3 = _crEventNames(),
          moveEvent = _crEventNames3.moveEvent,
          upEvent = _crEventNames3.upEvent;

      document.removeEventListener(moveEvent, _this._handleDragMouseMove);
      document.removeEventListener(upEvent, _this._handleDragMouseUp);

      _this.setState({
        dragged: false
      });
    };

    _this._handleFocusTrack = function () {
      _this.setState({
        hovered: true
      });
    };

    _this._handleBlurTrack = function () {
      _this.setState({
        hovered: false
      });
    };

    _this._handleKeyDownTrack = function (event) {
      switch (event.keyCode) {
        case 37:
          {
            var _this$props = _this.props,
                min = _this$props.min,
                step = _this$props.step,
                value = _this.state.value;

            if (value > min) {
              var _value = _addStep(value, -step, _this.stepExp);

              _this._setValue(event, _value);
            }

            break;
          }

        case 39:
          {
            var _this$props2 = _this.props,
                max = _this$props2.max,
                _step = _this$props2.step,
                _value2 = _this.state.value;

            if (_value2 < max) {
              var _value3 = _addStep(_value2, _step, _this.stepExp);

              _this._setValue(event, _value3);
            }

            break;
          }

        default:
          return;
      }
    };

    _this._onDragUpdate = function (event) {
      if (_this.dragRunning) {
        return;
      }

      _this.dragRunning = true;
      requestAnimationFrame(function () {
        _this.dragRunning = false;

        var _clientX = _getClientX(event);

        if (_clientX) {
          var position = _clientX - _this._calcTrackOffset();

          _this._setValueFromPosition(event, position);
        }
      });
    };

    _this._setValue = function (event, value) {
      _this.setState({
        value: value
      });

      if (_this.isOnChange) {
        _this.props.onChange(event, value);
      }
    };

    _this._calcTrackOffset = function () {
      return _this.trackComp.getBoundingClientRect()['left'];
    };

    _this._setValueFromPosition = function (event, position) {
      var positionMax = _this.trackComp['clientWidth'];

      if (position < 0) {
        position = 0;
      } else if (position > positionMax) {
        position = positionMax;
      }

      var _this$props3 = _this.props,
          step = _this$props3.step,
          min = _this$props3.min,
          max = _this$props3.max;
      var value;
      value = position / positionMax * (max - min);
      value = Math.round(value / step) * step + min;
      value = parseFloat(value.toFixed(5));

      if (value > max) {
        value = max;
      } else if (value < min) {
        value = min;
      }

      if (_this.state.value !== value) {
        _this._setValue(event, value);
      }
    };

    _this._refTrackComp = function (comp) {
      return _this.trackComp = comp;
    };

    _this.isOnChange = _isFn(props.onChange);
    var arr = ('' + props.step).split('.');
    _this.stepExp = arr[1] ? -1 * arr[1].length : 0;
    _this.state = {
      hovered: false,
      dragged: false,
      value: props.initValue,
      inputId: props.inputId
    };
    return _this;
  }

  InputSlider.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, state) {
    var inputId = nextProps.inputId;
    return inputId !== state.inputId ? {
      value: nextProps.initValue,
      inputId: inputId
    } : null;
  };

  var _proto = InputSlider.prototype;

  _proto.render = function render() {
    var _this$props4 = this.props,
        step = _this$props4.step,
        min = _this$props4.min,
        max = _this$props4.max,
        _this$state = this.state,
        hovered = _this$state.hovered,
        dragged = _this$state.dragged,
        value = _this$state.value,
        _lineAfterStyle = hovered ? (0, _extends2["default"])({}, S.LINE_AFTER, {}, S.LINE_HOVERED) : S.LINE_AFTER,
        _circleStyle = dragged ? S.CIRCLE_DRAGGED : null,
        _emberStyle = dragged ? S.EMBER : null,
        _percent = _toPercent(value, min, max),
        _widthBeforeStyle = _crWidthCalc(_percent),
        _widthAfterStyle = _crWidthCalc(100 - _percent),
        _leftStyle = _crLeftPercent(_percent),
        _scrollHandlers = HAS_TOUCH ? {
      onTouchStart: this._handleMouseDown
    } : {
      onMouseDown: this._handleMouseDown,
      onMouseEnter: this._handleMouseEnter,
      onMouseLeave: this._handleMouseLeave
    };

    return _react["default"].createElement("div", {
      style: S.ROOT
    }, _react["default"].createElement("div", (0, _extends2["default"])({
      ref: this._refTrackComp,
      role: "slider",
      tabIndex: "0",
      "aria-orientation": "horizontal",
      "aria-valuemax": max,
      "aria-valuemin": min,
      "aria-valuenow": value,
      style: S.ROOT_LINE
    }, _scrollHandlers, {
      onKeyDown: this._handleKeyDownTrack,
      onFocus: this._handleFocusTrack,
      onBlur: this._handleBlurTrack
    }), _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.LINE_BEFORE, {}, _widthBeforeStyle)
    }), _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, _lineAfterStyle, {}, _widthAfterStyle)
    }), _react["default"].createElement("div", {
      //tabIndex={0}
      style: (0, _extends2["default"])({}, S.ROOT_CIRCLE, {}, _circleStyle, {}, _leftStyle)
    }, _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.CIRCLE_INNER, {}, _circleStyle)
    }, (hovered || dragged) && _react["default"].createElement("div", {
      style: (0, _extends2["default"])({}, S.CIRCLE_INNER_EL, {}, _emberStyle)
    }))), _react["default"].createElement("input", {
      type: "hidden",
      step: step,
      min: min,
      max: max,
      value: value,
      required: true
    })));
  };

  _proto.setValue = function setValue(value) {
    this.setState({
      value: value
    });
  };

  return InputSlider;
}(_react.Component);

InputSlider.defaultProps = {
  initValue: 4,
  min: 0,
  max: 20,
  step: 1
};
var _default = InputSlider;
exports["default"] = _default;
//# sourceMappingURL=InputSlider.js.map