import type { 
  CSSProperties,
  FC,
  Ref,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
  MouseOrTouchEvent 
} from '../types';

import { 
  useRef, 
  useState,
  useImperativeHandle,
  getRefValue 
} from '../uiApi';

import useRefInit from '../hooks/useRefInit';
import useBool from '../hooks/useBool';
import useDragMouseDown from './useDragMouseDown';
import { HAS_TOUCH_EVENTS } from '../has';
import { 
  toPercent,
  round10 
} from '../../utils/math'

import CircleInner from './CircleInner';
//import PropTypes from "prop-types";

const S_ROOT: CSSProperties = {
  position: 'relative',
  width: '100%',
  height: 18,
  margin: '8px 0',
  userSelect : 'none',
  cursor: 'default'
}
, S_ROOT_LINE: CSSProperties = {
  position: 'absolute',
  top: 8,
  left: 0,
  width: '100%',
  height: 2
}
, S_LINE_BEFORE: CSSProperties = {
  position: 'absolute',
  left: 0,
  width: 'calc(15%)',
  height: '100%',
  marginRight: 6,
  backgroundColor: '#00bcd4',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
}
, S_LINE_AFTER: CSSProperties = {
  position: 'absolute',
  right: 0,
  width: 'calc(85%)',
  height: '100%',
  marginLeft: 6,
  backgroundColor: '#bdbdbd',
  transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
}
, S_LINE_AFTER_HOVERED: CSSProperties = {
  ...S_LINE_AFTER,
  backgroundColor: '#9e9e9e',
}
, S_ROOT_CIRCLE: CSSProperties = {
  //boxSizing: 'borderBox',
  boxSizing: 'border-box',
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
}
, S_CIRCLE_DRAGGED: CSSProperties = {
  width: 20,
  height: 20
}
, S_EMBER: CSSProperties = {
  top: -12,
  left: -12,
  width: '220%',
  height: 44,
  border: '1px solid #4caf50'
};

// eslint-disable-next-line
const _NOOP_FN = (n: number) => {}
, _checkValueInMinMax = (
  min: number, 
  max: number, 
  value: number
  ): number => value > max
    ? max
    : value < min ? min : value
, _crWidthStyle = (value: number) => ({
    width: `calc(${value}%)`
})
, _crLeftStyle = (value: number) => ({
   left: `${value}%`
})
, _getClienX = HAS_TOUCH_EVENTS
  ? (evt: TouchEvent) => (((evt || {}).touches || [])[0] || {}).clientX || 0
  : (evt: MouseEvent) => evt.clientX
, _isUp = (keyCode: number) => keyCode === 39 || keyCode === 38
, _isDown = (keyCode: number) => keyCode === 37 || keyCode === 40
, _calcValueByKeyCode = (
  value: number,
  step: number,
  keyCode: number
  ): number | void => _isUp(keyCode)
    ? value + step
    : _isDown(keyCode) ? value - step : void 0
, _isNumber = (n: unknown): n is number => typeof n === 'number'
    && n - n === 0;

type InputType = {
  setValue: (value: number) => void
}
type InputInnerRefType = Ref<InputType>

export interface InputSliderProps {
  innerRef?: InputInnerRefType;
  initialValue?: number;
  step?: number;
  min?: number;
  max?: number;
  onChange: (n: number) => void
}

const InputSlider: FC<InputSliderProps, false> = ({
  innerRef,
  initialValue=4,
  step=1,
  min=0,
  max=20,
  onChange=_NOOP_FN
}) => {
  const _refExp = useRefInit(() => {
    const arr = (''+step).split('.')
    return arr[1] ? -1 * arr[1].length : 0;
  })
  , _refTrack = useRef<HTMLDivElement>(null)
  , [isHovered, setHoveredTrue, setHoveredFalse] = useBool(false)
  , [value, setValue] = useState(initialValue)

  , _updateValue = (value: number) => {
    const _value = _checkValueInMinMax(min, max, value);
    setValue(_value)    
    onChange(_value)
  }
  , _hKeyDown = (evt: KeyboardEvent) => {
    const { keyCode } = evt
    , _value = _calcValueByKeyCode(value, step, keyCode);
    if (_value != null) {
      evt.preventDefault()
      _updateValue(_value)
    }
  }
  , _calcPositionFromEvent = (evt: MouseOrTouchEvent): number => {
    const _trackOffset = getRefValue(_refTrack)?.getBoundingClientRect().left
    return _getClienX(evt) - _trackOffset;
  }
  , _setValueFromPosition = (evt: MouseOrTouchEvent) => {
    const positionMax = getRefValue(_refTrack)?.clientWidth;
    let position = _calcPositionFromEvent(evt);
    if (_isNumber(positionMax) && _isNumber(position)) {
      if (position < 0) {
        position = 0;
      } else if (position > positionMax) {
        position = positionMax
      }
  
      let v;
      v = position/positionMax * (max - min)
      v = Math.round(v / step) * step + min
      v = round10(v, getRefValue(_refExp))
  
      _updateValue(v)
    }
  }
  , [isDragged, _hMouseDown] = useDragMouseDown(_setValueFromPosition);

  useImperativeHandle(innerRef!, () => ({
    setValue
  }), []) 

  const [_sliderHandlers, _btHandlers] = HAS_TOUCH_EVENTS
    ? [{onTouchStart: _hMouseDown}, void 0]
    : [{
        onMouseDown: _hMouseDown,
        onMouseEnter: setHoveredTrue,
        onMouseLeave: setHoveredFalse
       },{
        onFocus: setHoveredTrue,
        onKeyDown: _hKeyDown,
        onBlur: setHoveredFalse
      }]
  , _lineAfterStyle = isHovered
       ? S_LINE_AFTER_HOVERED
       : S_LINE_AFTER
  , [_circleStyle, _emberStyle] = isDragged
       ? [S_CIRCLE_DRAGGED, S_EMBER]
       : []          
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
        <div style={{...S_LINE_BEFORE, ..._widthBeforeStyle}} />
        <div style={{..._lineAfterStyle, ..._widthAfterStyle}} />
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
          <CircleInner 
             is={isHovered || isDragged}
             circleStyle={_circleStyle}
             emberStyle={_emberStyle}
          />          
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
