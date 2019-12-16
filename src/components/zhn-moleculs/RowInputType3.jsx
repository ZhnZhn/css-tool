import React, { Component } from 'react'
import tinycolor from 'tinycolor2'

import A from '../zhn/A'

const S = {
  ROOT: {
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
  /*
  static propTypes = {
    style: PropTypes.object,
    styleInput: PropTypes.object,
    caption: PropTypes.string,
    initValue: PropTypes.string,
    onEnter: PropTypes.func
  }
  */
  static defaultProps = {
    onEnter: () => {}
  }

  constructor(props){
    super(props)
    this.state = {
      value: props.initValue
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps){
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
         {/*eslint-disable jsx-a11y/label-has-for*/}
         <label style={{ ...S.ROOT }}>
           <span>{caption}</span>
           <A.InputText
             style={{ ...S.TEXT, ...styleInput }}
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
