import React, { Component, PropTypes } from 'react';

/*
 Mostly from
 https://github.com/callemall/material-ui/blob/master/src/Slider/Slider.js
*/

const S = {
  ROOT : {
    userSelect : 'none',
    cursor: 'default',
    height: '18px',
    width: '100%',
    position: 'relative',
    marginTop: '8px',
    marginBottom: '8px'
  },
  ROOT_LINE : {
    position: 'absolute',
    top: '8px',
    left: '0px',
    width: '100%',
    height: '2px'
  },
  LINE_BEFORE : {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    left: '0px',
    backgroundColor: 'rgb(0, 188, 212)',
    marginRight: '6px',
    width: 'calc(15%)'
  },
  LINE_AFTER : {
    position: 'absolute',
    height: '100%',
    transition: 'margin 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    right: '0px',
    backgroundColor: 'rgb(189, 189, 189)',
    marginLeft: '6px',
    width: 'calc(85%)'
  },
  LINE_HOVERED : {
    backgroundColor: 'rgb(158, 158, 158)',
  },
  ROOT_CIRCLE : {
    boxSizing: 'borderBox',
    position: 'absolute',
    cursor: 'pointer',
    pointerEvents: 'inherit',
    top: '0px',
    left: '15%',
    zIndex: '1',
    margin: '1px 0px 0px',
    width: '12px',
    height: '12px',
    backgroundColor: 'rgb(0, 188, 212)',
    backgroundClip: 'padding-box',
    border: '0px solid transparent',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    overflow: 'visible',
    outline: 'none',
    transition: 'background 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms'
  },
  CIRCLE_DRAGGED : {
    width: '20px',
    height: '20px '
  },
  CIRCLE_INNER : {
    position: 'absolute',
    overflow: 'visible',
    height: '12px',
    width: '12px',
    top: '0px',
    left: '0px'
  },
  CIRCLE_INNER_EL : {
    position: 'absolute',
    height: '36px',
    width: '300%',
    borderRadius: '50%',
    //opacity: '0.16',
    backgroundColor: 'rgba(0, 188, 212, 0.16)',
    top: '-12px',
    left: '-12px',
    transform: 'scale(1)'
  },
  EMBER : {
    top: '-12px' ,
    left: '-12px',
    height: '44px',
    width: '220%',
    border: '1px solid #4caf50'
  }
}

const _round10 = (value, exp) => {
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math.round(+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');

    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
}

const _fnAddStep = (value, step, exp ) => {
  return (exp) ? _round10(value + step, exp) : (value + step);
}


  const _fnToPercent = (value, min, max) => {
  let _percent = (value - min ) / (max - min)
  return isNaN(_percent) ? 0 : _percent*100;
}
const _fnWidthCalc = (percent) => {
  return { width: `calc(${percent}%)`};
}
const _fnLeftPercent = (percent) => {
  return { left: `${percent}%`};
}

class InputSlider extends Component {
  static propTypes = {
    initValue: PropTypes.number,
    step : PropTypes.number,
    min : PropTypes.number,
    max : PropTypes.number,
    onChange : PropTypes.func
  }

  static defaultProps = {
    initValue: 4,
    min : 0,
    max : 20,
    step : 1
  }

  constructor(props){
    super()
    this.isOnChange = (typeof props.onChange === 'function')
               ? true : false
    const arr = (''+props.step).split('.')
    this.stepExp = (arr[1]) ? -1 * arr[1].length : 0

    this.state = {
      hovered : false,
      dragged : false,
      value : props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    if (nextProps !== this.props){
      this.setState({ value : nextProps.initValue });
    }
  }


  _handleMouseEnter = () => {
    this.setState({ hovered: true })
  }
  _handleMouseLeave = () => {
    this.setState({ hovered: false })
  }
  _handleMouseDown = (event) => {
    // Cancel text selection
    event.preventDefault()
    document.addEventListener('mousemove', this._handleDragMouseMove)
    document.addEventListener('mouseup', this._handleDragMouseUp)
    this.setState({
      dragged : true
    })
  }

  _handleDragMouseMove = (event) => {
    this._onDragUpdate(event)
  }
  _handleDragMouseUp = () => {
     document.removeEventListener('mousemove', this._handleDragMouseMove)
     document.removeEventListener('mouseup', this._handleDragMouseUp)
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
           const _value = _fnAddStep(value, -step, this.stepExp)
           this._setValue(event, _value)
         }
         break;
       }
       case 39: {
         const  { max, step } = this.props
              , { value } = this.state;
         if ( value < max) {
           const _value = _fnAddStep(value, step, this.stepExp)
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
      const position = event.clientX - this._calcTrackOffset()
      this._setValueFromPosition(event, position)
    })
  }

  _setValue = (event, value) => {
    this.setState({ value })
    if (this.isOnChange){
      this.props.onChange(event, value)
    }
  }

  _calcTrackOffset = () => {
    return this.trackComp.getBoundingClientRect()['left'];
  }

  _setValueFromPosition = (event, position) => {
    const positionMax = this.trackComp['clientWidth']
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
    , _circleStyle = (dragged) ? S.CIRCLE_DRAGGED : null
    , _emberStyle = (dragged) ? S.EMBER : null
    , _circleInnerEl = (hovered || dragged)
          ? ( <div style={{ ...S.CIRCLE_INNER_EL, ..._emberStyle }}></div> )
          : null
    , _percent = _fnToPercent(value, min, max)
    , _widthBeforeStyle = _fnWidthCalc(_percent)
    , _widthAfterStyle = _fnWidthCalc(100 - _percent)
    , _leftStyle = _fnLeftPercent(_percent)

    return (
      <div style={S.ROOT}
        onMouseDown={this._handleMouseDown}
        onMouseEnter={this._handleMouseEnter}
        onMouseLeave={this._handleMouseLeave}
      >
        <div
           ref={comp => this.trackComp = comp}
           tabIndex="0"
           style={S.ROOT_LINE}
           onKeyDown={this._handleKeyDownTrack}
           onFocus={this._handleFocusTrack}
           onBlur={this._handleBlurTrack}
        >
          <div style={{...S.LINE_BEFORE, ..._widthBeforeStyle }} />
          <div style={{..._lineAfterStyle, ..._widthAfterStyle }} />
          <div
             //tabIndex={0}
             style={{...S.ROOT_CIRCLE, ..._circleStyle, ..._leftStyle }}
          >
            <div style={{ ...S.CIRCLE_INNER, ..._circleStyle}} >
              {_circleInnerEl}
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
