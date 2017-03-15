import React, { Component, PropTypes } from 'react'

import fn from './helpers/fn'

const STYLE = {
  ROOT : {
    width: '100%',
    height: '430px',
    paddingTop: '24px'
  },
  INNER : {
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    height: '250px',
    resize: 'both',
    overflow: 'auto'
  }
}


const _fnToStyle = boxShadows => {
  const values = boxShadows.map(value => {
     return fn.toCssValue(value);
  })
  return {
    boxShadow: values.join(',')
  };
}


class Preview extends Component {
  static propTypes = {
    boxShadows: PropTypes.arrayOf(
      PropTypes.shape({
        gLength: PropTypes.number,
        vLength: PropTypes.number,
        blurR: PropTypes.number,
        spreadR: PropTypes.number,
        opacity: PropTypes.number
      })
    ),
    configStyle: PropTypes.shape({
      bgColor: PropTypes.string,
      boxColor: PropTypes.string,
      borderRadius: PropTypes.string
    })
  }

  render(){
    const { boxShadows, configStyle } = this.props
        , _style = _fnToStyle(boxShadows)
        , _rootStyle = { backgroundColor: configStyle.bgColor }
        , _boxStyle = {
             backgroundColor: configStyle.boxColor,
             borderRadius: configStyle.boxBorderRadius
           };        
    return (
      <div style={{ ...STYLE.ROOT, ..._rootStyle}}>
        <div style={{ ...STYLE.INNER, ..._boxStyle, ..._style }}>
        </div>
      </div>
    )
  }
}

export default Preview
