import React, { PropTypes } from 'react'

const STYLE = {
  ROOT: {
    display: 'inline-block',
    height: '32px',
    width: '32px',
    borderRadius: '2px',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
}

const Color = ({ style, value }) => {
  const _style = (value)
           ? { backgroundColor: value }
           : null;
  return (
    <span style={{...STYLE.ROOT, ...style, ..._style }}>
    </span>
  )
}

Color.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string
}

export default Color
