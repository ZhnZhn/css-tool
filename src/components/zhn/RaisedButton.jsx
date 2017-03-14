import React, { Component, PropTypes } from 'react'

/*
mostly from
http://www.material-ui.com/#/components/raised-button
*/

const STYLE = {
  ROOT: {
    color: 'rgba(0, 0, 0, 0.870588)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    boxSizing: 'border-box',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    borderRadius: '2px',
    display: 'inline-block',
    margin: '12px'
  },
  BT: {
    border: '10px',
    boxSizing: 'border-box',
    display: 'inline-block',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    cursor: 'pointer',
    textDecoration: 'none',
    margin: '0px',
    padding: '0px',
    outline: 'none',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    position: 'relative',
    zIndex: '1',
    height: '36px',
    lineHeight: '36px',
    width: '100%',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    backgroundColor: 'rgb(0, 188, 212)',
    textAlign: 'center'
  },
  DIV: {
    height: '36px',
    borderRadius: '2px',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    top: '0px'
  },
  CAPTION: {
    position: 'relative',
    opacity: '1',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '0px',
    textTransform: 'uppercase',
    margin: '0px',
    userSelect: 'none',
    paddingLeft: '16px',
    paddingRight: '16px',
    color: 'beige',
  }
}

class RaisedButton extends Component {
  static propTypes = {
    style: PropTypes.object,
    caption: PropTypes.string,
    onClick: PropTypes.func
  }
  static defaultProps = {
    onClick: () => {}
  }

  render(){
    const { style, caption, onClick } = this.props
    return (
      <div style={{...STYLE.ROOT, ...style }}>
      <button
        type="button"
        style={STYLE.BT}
        tabIndex="0"
      >
      <div
        className="bt-div"
        style={STYLE.DIV}
        onClick={onClick}
      >
        <span style={STYLE.CAPTION}>
          {caption}
        </span>
      </div>
      </button>
      </div>
    );
  }
}

export default RaisedButton
