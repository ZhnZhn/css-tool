import React, { Component } from 'react'
import tinycolor from 'tinycolor2'

import A from '../zhn/A'
import S from './style'

class RowInputType3 extends Component {
  /*
  static propTypes = {
    style: PropTypes.object,
    styleInput: PropTypes.object,
    caption: PropTypes.string,
    inputId: PropTypes.string,
    initValue: PropTypes.string,
    onEnter: PropTypes.func
  }
  */
  static defaultProps = {
    onEnter: () => {}
  }

  constructor(props){
    super(props)
    const { initValue } = props;
    this.state = {
      value: initValue,
    }
  }

  _handleEnter = (value) => {
     const color = tinycolor(value)
     if (color.isValid()){
       this.props.onEnter(value, color)
       this.setState({ value: color.toHexString() })
     }
  }

  render(){
    const {      
      styleInput,
      caption,
      inputId,
    } = this.props
    , { value } = this.state;

    return (
      <div className={S.CL_ROW}>
         {/*eslint-disable jsx-a11y/label-has-for*/}
         <label className={S.CL_CAPTION}>
           <span>{caption}</span>
           <A.InputText
             style={{ ...S.TEXT, ...styleInput }}
             inputId={inputId}
             initValue={value}
             onEnter={this._handleEnter}
            />
            <A.Color
               style={S.COLOR}
               value={value}
            />
         </label>
         {/*eslint-enable jsx-a11y/label-has-for*/}
      </div>
    );
  }
}

export default RowInputType3
