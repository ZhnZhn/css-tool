import { Component, createRef } from 'preact';

import fnMath from '../../utils/math'
import has from '../has';

/*
 Mostly from old version Material-UI
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/

const { HAS_TOUCH } = has;
const { round10, toPercent } = fnMath

const S = {
  ROOT : {
    position: 'relative',
    height: 18,
    width: '100%',
    marginTop: 8,
    marginBottom: 8,
    userSelect : 'none',
    cursor: 'default'
  },
  ROOT_LINE : {
    position: 'absolute',
    top: 8,
    left: 0,
    width: '100%',
    height: 2,
    touchAction: 'none'
  },
  LINE_BEFORE : {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 'calc(15%)',
    marginRight: 6,
    backgroundColor: 'rgb(0, 188, 212)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  LINE_AFTER : {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 'calc(85%)',
    marginLeft: 6,
    backgroundColor: 'rgb(189, 189, 189)',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  },
  LINE_HOVERED : {
    backgroundColor: 'rgb(158, 158, 158)',
  },
  ROOT_CIRCLE : {
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
  CIRCLE_DRAGGED : {
    width: 20,
    height: 20
  },
  CIRCLE_INNER : {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 12,
    width: 12,
    overflow: 'visible'
  },
  CIRCLE_INNER_EL : {
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
  EMBER : {
    top: -12 ,
    left: -12,
    height: 44,
    width: '220%',
    border: '1px solid #4caf50'
  }
};

const _isFn = fn => typeof fn === 'function';

const _addStep = (value, step, exp ) => exp
   ? round10(value + step, exp)
   : value + step;

const _crWidthCalc = (percent) => ({
  width: `calc(${percent}%)`
});
const _crLeftPercent = (percent) => ({
  left: `${percent}%`
});

const _crEventNames = () => HAS_TOUCH
 ? { moveEvent: 'touchmove', upEvent: 'touchend' }
 : { moveEvent: 'mousemove', upEvent: 'mouseup' };

const _isTouchNode = (node) => HAS_TOUCH && node;

const _getClientX = event => HAS_TOUCH
  ? event.changedTouches[0]?.clientX
  : event.clientX;

class InputSlider extends Component {
  /*
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }
  */

  static defaultProps = {
    initValue: 4,
    min : 0,
    max : 20,
    step : 1
  }

  constructor(props){
    super(props)
    this.isOnChange = _isFn(props.onChange)

    this._refTrack = createRef()
    this._refTouch = createRef()

    const arr = (''+props.step).split('.')
    this.stepExp = (arr[1]) ? -1 * arr[1].length : 0

    this.state = {
      hovered : false,
      dragged : false,
      value : props.initValue,
      inputId: props.inputId
    }
  }

  componentDidMount(){
    const _node = this._refTouch.current;
    if (_isTouchNode(_node)){
      _node.addEventListener('touchstart',
       this._handleMouseDown, { passive: true })
    }
  }

  componentWillUnmount(){
    const _node = this._refTouch.current;
    if (_isTouchNode(_node)){
      _node.removeEventListener('touchstart',
       this._handleMouseDown)
    }
  }

  static getDerivedStateFromProps(nextProps, state){
   const { inputId } = nextProps;
   return inputId !== state.inputId
     ? { value: nextProps.initValue, inputId }
     : null;
  }

  _handleMouseEnter = () => {
    this.setState({ hovered: true })
  }
  _handleMouseLeave = () => {
    this.setState({ hovered: false })
  }
  _handleMouseDown = (event) => {
    // Cancel text selection
    if (!HAS_TOUCH) {
      event.preventDefault()
    }

    const { moveEvent, upEvent } = _crEventNames();
    document.addEventListener(moveEvent, this._handleDragMouseMove)
    document.addEventListener(upEvent, this._handleDragMouseUp)
    this.setState({
      dragged : true
    })
  }

  _handleDragMouseMove = (event) => {
    this._onDragUpdate(event)
  }
  _handleDragMouseUp = () => {
     const { moveEvent, upEvent } = _crEventNames();
     document.removeEventListener(moveEvent, this._handleDragMouseMove)
     document.removeEventListener(upEvent, this._handleDragMouseUp)
     this.setState({
       dragged : false
     })
  }

  _handleFocusTrack = () => {
    this.setState({ hovered: true })
  }
  _handleBlurTrack = () => {
    this.setState({ hovered: false })
  }
  _handleKeyDownTrack = (event) => {
     switch(event.keyCode){
       case 37: {
         const  { min, step } = this.props
              , { value } = this.state;
         if ( value > min) {
           const _value = _addStep(value, -step, this.stepExp)
           this._setValue(event, _value)
         }
         break;
       }
       case 39: {
         const  { max, step } = this.props
              , { value } = this.state;
         if ( value < max) {
           const _value = _addStep(value, step, this.stepExp)
           this._setValue(event, _value)
         }
         break;
       }
       default: return;
     }
  }

  _onDragUpdate = (event) => {
    if (this.dragRunning) {
      return;
    }
    this.dragRunning = true;
    requestAnimationFrame(() => {
      this.dragRunning = false;
      const _clientX = _getClientX(event);
      if (_clientX) {
        const position = _clientX - this._calcTrackOffset()
        this._setValueFromPosition(event, position)
      }
    })
  }

  _setValue = (event, value) => {
    this.setState({ value })
    if (this.isOnChange){
      this.props.onChange(event, value)
    }
  }

  _calcTrackOffset = () => {
    return this._refTrack.current.getBoundingClientRect()['left'];
  }

  _setValueFromPosition = (event, position) => {
    const positionMax = this._refTrack.current['clientWidth']
    if (position < 0) {
      position = 0;
    } else if (position > positionMax) {
      position = positionMax
    }

    const { step, min, max } = this.props
    let value
    value = position/positionMax * (max - min)
    value = Math.round(value / step) * step + min
    value = parseFloat(value.toFixed(5))

    if (value > max) {
      value = max
    } else if (value < min ) {
      value = min
    }

    if (this.state.value !== value) {
      this._setValue(event, value)
    }
  }

  render(){
    const { step, min , max } = this.props
    , { hovered, dragged, value } = this.state
    , _lineAfterStyle = (hovered)
          ? {...S.LINE_AFTER, ...S.LINE_HOVERED}
          : S.LINE_AFTER
    , _circleStyle = dragged ? S.CIRCLE_DRAGGED : null
    , _emberStyle = dragged ? S.EMBER : null
    , _percent = toPercent(value, min, max)
    , _widthBeforeStyle = _crWidthCalc(_percent)
    , _widthAfterStyle = _crWidthCalc(100 - _percent)
    , _leftStyle = _crLeftPercent(_percent)
    , _sliderProps = {
        role: "slider",
        tabIndex: "0",
        'aria-orientation': "horizontal",
        'aria-valuemax': max,
        'aria-valuemin': min,
        'aria-valuenow': value
      }
    , _mouseSlider = HAS_TOUCH
        ? void 0
        : {
          ..._sliderProps,
          onMouseDown: this._handleMouseDown,
          onMouseEnter: this._handleMouseEnter,
          onMouseLeave: this._handleMouseLeave,
          onKeyDown: this._handleKeyDownTrack,
          onFocus: this._handleFocusTrack,
          onBlur: this._handleBlurTrack
        }
    , _touchSlider = HAS_TOUCH
        ? _sliderProps
        : void 0;

    return (
      <div style={S.ROOT}>
        <div
           ref={this._refTrack}
           style={S.ROOT_LINE}
           {..._mouseSlider}
        >
          <div style={{...S.LINE_BEFORE, ..._widthBeforeStyle }} />
          <div style={{..._lineAfterStyle, ..._widthAfterStyle }} />
          <div
            ref={this._refTouch}
             style={{...S.ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
             {..._touchSlider}
           >
            <div style={{ ...S.CIRCLE_INNER, ..._circleStyle}} >
              { (hovered || dragged) && <div
                    style={{ ...S.CIRCLE_INNER_EL, ..._emberStyle }}
                 />
               }
            </div>
          </div>
          <input
            type="hidden"
            step={step}
            min={min}
            max={max}
            value={value}
            required={true}
          />
        </div>
      </div>
    );
  }

  setValue(value){
    this.setState({ value })
  }

}

export default InputSlider
