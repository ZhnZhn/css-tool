import React, { Component, PropTypes } from 'react'

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
     caption: PropTypes.string,
     initValue: PropTypes.number,
     unit: PropTypes.string,
     onChange: PropTypes.func
   }
   static defaultProps = {
     unit: 'px'
   }

   constructor(props){
     super()
     this.isOnChange = (typeof props.onChange === 'function')
             ? true : false
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
        , _value = parseInt(value, 10);
    if ( _value>=min && _value<=max ){
      this.value = _value
      this.sliderComp.setValue(_value)
      this._handleOnChange(value)
    }
  }

  render(){
    const { style, caption, initValue, unit, ...rest } = this.props
    return (
      <div style={style} >
        <label style={{ lineHeight: 1.8 }}>
          <span>{caption}</span>
          <span style={STYLE.RIGHT}>{unit}</span>
          <InputText
             ref={c => this.textComp = c}
             style={STYLE.RIGHT}
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
