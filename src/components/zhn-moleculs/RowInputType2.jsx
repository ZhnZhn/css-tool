import React, { Component, PropTypes } from 'react'

import InputText from '../zhn/InputText'

const STYLE = {
  ROOT : {
    lineHeight: 1.8
  },
  TEXT: {
    float: 'right',
    width: '80px'
  }
}

class RowInputType2 extends Component {
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

  render(){
    const { style, styleInput, caption, initValue, onEnter } = this.props
    return (
       <div style={{ ...STYLE.ROOT, ...style }}>
         <span>{caption}</span>
         <InputText
           style={{ ...STYLE.TEXT, ...styleInput }}
           initValue={initValue}
           onEnter={onEnter}
          />
       </div>
    );
  }
}

export default RowInputType2
