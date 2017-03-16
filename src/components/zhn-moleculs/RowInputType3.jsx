import React, { Component, PropTypes } from 'react'
import tinycolor from 'tinycolor2'

import Color from '../zhn/Color'
import InputText from '../zhn/InputText'

const STYLE = {
  ROOT : {
    lineHeight: 1.8
  },
  COLOR: {
    float: 'right',
    marginLeft: '16px',
    marginRight: '16px'
  },
  TEXT: {
    float: 'right',
    width: '80px'
  }
}

class RowInputType3 extends Component {
  static propTypes = {
    style: PropTypes.object,
    styleInput: PropTypes.object,
    caption: PropTypes.string,
    initValue: PropTypes.string,
    onEnter: PropTypes.func
  }
  static defaultProps = {
    onEnter: () => {}
  }

  constructor(props){
    super()
    this.state = {
      value: props.initValue
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps &&
        this.state.value !== nextProps.initValue ) {
      this.setState({ value: nextProps.initValue })
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
    const { style, styleInput, caption } = this.props
        , { value } = this.state;
    return (
      <div style={style}>
         <label style={{ ...STYLE.ROOT }}>
           <span>{caption}</span>
           <InputText
             style={{ ...STYLE.TEXT, ...styleInput }}
             initValue={value}
             onEnter={this._handleEnter}
            />
            <Color
               style={STYLE.COLOR}
               value={value}
            />
         </label>
      </div>
    );
  }
}

export default RowInputType3
