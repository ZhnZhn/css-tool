import React, { Component, PropTypes } from 'react'

import fnMath from '../../utils/math'

import InputText from '../zhn/InputText'
import InputSlider from '../zhn/InputSlider'

const STYLE = {
  RIGHT: {
    float: 'right'
  }
}

class RowInputType1 extends Component {
   static propTypes = {
     style: PropTypes.object,
     styleInput: PropTypes.object,

     caption: PropTypes.string,
     initValue: PropTypes.number,
     min: PropTypes.number,
     max: PropTypes.number,
     step: PropTypes.number,
     unit: PropTypes.string,

     onChange: PropTypes.func
   }
   static defaultProps = {
     unit: 'px',
     step: 1
   }

   constructor(props){
     super()
     this.isOnChange = (typeof props.onChange === 'function')
             ? true : false

     const arr = (''+props.step).split('.')
     this.stepExp = (arr[1]) ? -1 * arr[1].length : 0
   }

 _handleOnChange = (value) => {
   if (this.isOnChange){
     this.props.onChange(value)
   }
 }

  _handleChangeSlider = (event, value) => {
    this.value = value
    this.textComp.setValue(value)
    this._handleOnChange(value)
  }

  _handleChangeText = (value) => {
    const { min, max } = this.props
        , _value = (this.stepExp !== 0)
            ? fnMath.round10(parseFloat(value), this.stepExp)
            : parseInt(value, 10);

    if ( _value>=min && _value<=max ){
      this.value = _value
      this.sliderComp.setValue(_value)
      this._handleOnChange(value)
    }
  }

  render(){
    const { style, styleInput, caption, initValue, unit, ...rest } = this.props
    return (
      <div style={style} >
        <label style={{ lineHeight: 1.8 }}>
          <span>{caption}</span>
          <span style={STYLE.RIGHT}>{unit}</span>
          <InputText
             ref={c => this.textComp = c}
             style={{ ...STYLE.RIGHT, ...styleInput }}
             initValue={initValue}
             onChange={this._handleChangeText}
          />
        </label>

        <InputSlider
           ref={c => this.sliderComp = c}
           {...rest}
           initValue={initValue}
           onChange={this._handleChangeSlider}
        />
      </div>
    );
  }
}

export default RowInputType1
