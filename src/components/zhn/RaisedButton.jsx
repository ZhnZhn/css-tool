import { h } from 'preact'

/*
mostly from
http://www.material-ui.com/#/components/raised-button
*/

const S = {
  ROOT: {
    display: 'inline-block',
    color: 'rgba(0, 0, 0, 0.870588)',
    backgroundColor: 'rgb(255, 255, 255)',
    transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
    fontFamily: 'Roboto, sans-serif',
    //-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    borderRadius: 2,
    margin: 12
  },
  BT: {
    border: 10,
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

const RaisedButton = ({
  style, caption,
  onClick=()=>{}
}) => (
  <div style={{...S.ROOT, ...style }}>
    <button
      style={S.BT}
      onClick={onClick}
    >
    <div
      className="bt-div"
      style={S.DIV}
    >
      <span style={S.CAPTION}>
        {caption}
      </span>
    </div>
    </button>
  </div>
);

export default RaisedButton
