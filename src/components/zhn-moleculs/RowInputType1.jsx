import React, { Component } from 'react'

import fnMath from '../../utils/math'

import A from '../zhn/A'

const S = {
  RIGHT: {
    float: 'right'
  },
  LABEL: {
     lineHeight: 1.8
  }
};

const _isFn = fn => typeof fn === 'function';

class RowInputType1 extends Component {
  /*
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
   */

   static defaultProps = {
     unit: 'px',
     step: 1
   }

   constructor(props){
     super(props)
     this.isOnChange = _isFn(props.onChange)

     this._refTextComp = React.createRef()
     this._refSliderComp = React.createRef()

     const _arr = (''+props.step).split('.');
     this.stepExp = _arr[1] ? -1 * _arr[1].length : 0
   }

 _handleOnChange = (value) => {
   if (this.isOnChange){
     this.props.onChange(value)
   }
 }

  _handleChangeSlider = (event, value) => {
    this.value = value
    this._refTextComp.current.setValue(value)
    this._handleOnChange(value)
  }

  _handleChangeText = (value) => {
    const { min, max } = this.props
    , _value = this.stepExp !== 0
        ? fnMath.round10(parseFloat(value), this.stepExp)
        : parseInt(value, 10);

    if ( _value>=min && _value<=max ){
      this.value = _value
      this._refSliderComp.current.setValue(_value)
      this._handleOnChange(value)
    }
  }

  render(){
    const {
      style, styleInput,
      name, caption,
      initValue, inputId,
      unit,
      min, max, step,
      ...rest
    } = this.props
    return (
      <div style={style} >
        {/*eslint-disable jsx-a11y/label-has-for*/}
        <label style={S.LABEL}>
          <span>{caption}</span>
          <span style={S.RIGHT}>{unit}</span>
          <A.InputText
             innerRef={this._refTextComp}
             style={{ ...S.RIGHT, ...styleInput }}
             type="number"
             name={name}
             inputId={inputId}
             initValue={initValue}
             step={step}
             min={min}
             max={max}
             onChange={this._handleChangeText}
          />
        </label>
        {/*eslint-enable jsx-a11y/label-has-for*/}
        <A.InputSlider
           ref={this._refSliderComp}
           {...rest}
           inputId={inputId}
           step={step}
           min={min}
           max={max}
           initValue={initValue}
           onChange={this._handleChangeSlider}
        />
      </div>
    );
  }
}

export default RowInputType1
