import { 
  useRef, 
  useState,
  useImperativeHandle,
  getRefValue 
} from '../uiApi';

import useRefInit from '../hooks/useRefInit';
import useBool from '../hooks/useBool';
import { HAS_TOUCH_EVENTS } from '../has';
import { 
  toPercent,
  round10 
} from '../../utils/math'
//import PropTypes from "prop-types";

const S_ROOT = {
  position: 'relative',
  width: '100%',
  height: 18,
  margin: '8px 0',
  userSelect : 'none',
  cursor: 'default'
},
S_ROOT_LINE = {
  position: 'absolute',
  top: 8,
  left: 0,
  width: '100%',
  height: 2
},
S_LINE_BEFORE = {
  position: 'absolute',
  left: 0,
  width: 'calc(15%)',
  height: '100%',
  marginRight: 6,
  backgroundColor: '#00bcd4',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
},
S_LINE_AFTER = {
  position: 'absolute',
  right: 0,
  width: 'calc(85%)',
  height: '100%',
  marginLeft: 6,
  backgroundColor: '#bdbdbd',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
},
S_LINE_HOVERED = {
  backgroundColor: '#9e9e9e',
},
S_ROOT_CIRCLE = {
  boxSizing: 'borderBox',
  zIndex: '1',
  position: 'absolute',
  top: 0,
  left: '15%',
  width: 12,
  height: 12,
  cursor: 'pointer',
  pointerEvents: 'inherit',
  margin: '1px 0px 0px',
  backgroundColor: '#00bcd4',
  backgroundClip: 'padding-box',
  border: '0px solid transparent',
  borderRadius: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'visible',
  outline: 'none',
  transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
},
S_CIRCLE_DRAGGED = {
  width: 20,
  height: 20
},
S_CIRCLE_INNER = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: 12,
  height: 12,
  overflow: 'visible'
},
S_CIRCLE_INNER_EL = {
  position: 'absolute',
  top: -12,
  left: -12,
  width: '300%',
  height: 36,
  borderRadius: '50%',
  //opacity: '0.16',
  backgroundColor: 'rgba(0, 188, 212, 0.16)',
  transform: 'scale(1)'
},
S_EMBER = {
  top: -12,
  left: -12,
  width: '220%',
  height: 44,
  border: '1px solid #4caf50'
};

const _noopFn = (n) => {}
, EVENT_NAME_MOVE = HAS_TOUCH_EVENTS ? 'touchmove' : 'mousemove'
, EVENT_NAME_UP = HAS_TOUCH_EVENTS ? 'touchend' : 'mouseup'
, _checkValueInMinMax = (min, max, value) => value > max
    ? max
    : value < min ? min : value
, _crWidthStyle = percent => ({
    width: `calc(${percent}%)`
})
, _crLeftStyle = percent => ({
   left: `${percent}%`
})
, _getClienX = HAS_TOUCH_EVENTS
  ? evt => (((evt || {}).touches || [])[0] || {}).clientX || 0
  : evt => evt.clientX
, _isUp = keyCode => keyCode === 39 || keyCode === 38
, _isDown = keyCode => keyCode === 37 || keyCode === 40
, _calcNewValueByKeyCode = (value, step, keyCode) => _isUp(keyCode)
    ? value + step
    : _isDown(keyCode) ? value - step : void 0;

const _useMouseDown = (setValueFromPosition) => {
  const [dragged, setDraggedTrue, setDraggedFalse] = useBool(false)
  , _refDragRunning = useRef(false)
  , _hDragMouseMove = (event) => {
    if (getRefValue(_refDragRunning)) {
      return;
    }
    _refDragRunning.current = true;
    requestAnimationFrame(() => {
      _refDragRunning.current = false;
      setValueFromPosition(event)
    })
  }
  , _hDragMouseUp = () => {
     document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
     document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp)
     setDraggedFalse()
  },
  _hMouseDown = (event) => {
    // Cancel text selection
    if (!HAS_TOUCH_EVENTS) {
      event.preventDefault()
    }
    document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
    document.addEventListener(EVENT_NAME_UP, _hDragMouseUp)
    setDraggedTrue()
  };
  return [dragged, _hMouseDown];
};

const InputSlider = ({
  innerRef,
  initialValue=4,
  step=1,
  min=0,
  max=20,
  onChange=_noopFn
}) => {
  const _refExp = useRefInit(() => {
    const arr = (''+step).split('.')
    return arr[1] ? -1 * arr[1].length : 0;
  })
  , _refTrack = useRef()
  , [hovered, setHoveredTrue, setHoveredFalse] = useBool(false)
  , [value, setValue] = useState(initialValue)

  , _updateValue = (event, newValue) => {
    const _newValue = _checkValueInMinMax(min, max, newValue);
    setValue(_newValue)    
    onChange(_newValue)
  }
  , _hKeyDown = (evt) => {
    const { keyCode } = evt
    , _newValue = _calcNewValueByKeyCode(value, step, keyCode);
    if (_newValue != null) {
      evt.preventDefault()
      _updateValue(evt, _newValue)
    }
  }
  , _calcPositionFromEvent = (event) => {
    const _trackOffset = getRefValue(_refTrack)?.getBoundingClientRect().left
    return _getClienX(event) - _trackOffset;
  }
  , _setValueFromPosition = (event) => {
    const positionMax = getRefValue(_refTrack).clientWidth;
    let position = _calcPositionFromEvent(event);
    if (position < 0) {
      position = 0;
    } else if (position > positionMax) {
      position = positionMax
    }

    let v;
    v = position/positionMax * (max - min)
    v = Math.round(v / step) * step + min
    v = round10(v, getRefValue(_refExp))

    _updateValue(event, v)
  }
  , [dragged, _hMouseDown] = _useMouseDown(_setValueFromPosition);

  useImperativeHandle(innerRef, () => ({
    setValue
  }), []) 

  const _sliderHandlers = HAS_TOUCH_EVENTS ? {
     onTouchStart: _hMouseDown
  } : {
    onMouseDown: _hMouseDown,
    onMouseEnter: setHoveredTrue,
    onMouseLeave: setHoveredFalse
  }, _btHandlers = HAS_TOUCH_EVENTS ? void 0 : {
      onFocus: setHoveredTrue,
      onKeyDown: _hKeyDown,
      onBlur: setHoveredFalse
  }, _lineAfterStyle = hovered
        ? {...S_LINE_AFTER, ...S_LINE_HOVERED}
        : S_LINE_AFTER
  , _circleStyle = dragged ? S_CIRCLE_DRAGGED : null
  , _emberStyle = dragged ? S_EMBER : null
  , _circleInnerEl = (hovered || dragged)
        ? <div style={{ ...S_CIRCLE_INNER_EL, ..._emberStyle }} />
        : null
  , _percent = toPercent(value, min, max)
  , _widthBeforeStyle = _crWidthStyle(_percent)
  , _widthAfterStyle = _crWidthStyle(100 - _percent)
  , _leftStyle = _crLeftStyle(_percent);

  return (
    <div
      style={S_ROOT}
      {..._sliderHandlers}
    >
      <div
         ref={_refTrack}
         style={S_ROOT_LINE}
      >
        <div style={{...S_LINE_BEFORE, ..._widthBeforeStyle }} />
        <div style={{..._lineAfterStyle, ..._widthAfterStyle }} />
        <input
          type="hidden"
          step={step}
          min={min}
          max={max}
          value={value}
          required={true}
        />
        <div
           role="slider"
           tabIndex={0}
           aria-valuenow={value}
           aria-valuemin={min}
           aria-valuemax={max}
           aria-orientation="horizontal"
           aria-labelledby="discrete-slider-custom"
           style={{...S_ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
           {..._btHandlers}
        >
          <div style={{ ...S_CIRCLE_INNER, ..._circleStyle}} >
            {_circleInnerEl}
          </div>
        </div>
      </div>
    </div>
  );
}

/*
InputSlider.propTypes = {
  innerRef : PropTypes.ref,
  initialValue : PropTypes.number,
  step : PropTypes.number,
  min : PropTypes.number,
  max : PropTypes.number,
  onChange : PropTypes.func
}
*/

export default InputSlider
