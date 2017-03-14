import React, { Component, PropTypes } from 'react'

import RaisedButton from '../zhn/RaisedButton'
import fn from './helpers/fn'

const STYLE = {
  ROOT: {
    paddingTop: '16px'
  },
  TITLE: {
    color: '#80c040',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  VALUE: {
    fontSize: '20px',
    color: 'darkslateblue'
  },
  EDITED: {
    borderBottom: '2px solid green'
  },
  BT: {
    width: '70px'
  },
  BT_R: {
     width: '100px'
  }
}

class CssValue extends Component {
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
    currentIndex: PropTypes.number,
    onAdd: PropTypes.func,
    onEdit: PropTypes.func,
    onRemove: PropTypes.func
  }

  _renderValues(options){
     const { boxShadows=[], currentIndex, onAdd, onEdit, onRemove } = options
     const max = boxShadows.length-1
     return boxShadows.map((item, index) => {
        const _sufix = (index !== max) ? "," : ";"
            , _styleValue = (index === currentIndex)
                 ? STYLE.EDITED
                 : null
        return (
          <div>
            <span style={{...STYLE.VALUE, ..._styleValue }}>
              {`${fn.toCssValue(item)}${_sufix}`}
            </span>

            <RaisedButton
              style={STYLE.BT}
              caption="EDIT"
              onClick={onEdit.bind(null, index)}
            />
            <RaisedButton
              style={STYLE.BT}
              caption="ADD"
              onClick={onAdd.bind(null, index)}
            />
            <RaisedButton
              style={STYLE.BT_R}
              caption="REMOVE"
              onClick={onRemove.bind(null, index)}
            />
          </div>
        )
     })
  }

  render(){
    return (
      <div style={STYLE.ROOT}>
        <div style={STYLE.TITLE}>BOX-SHADOW:</div>
        {this._renderValues(this.props)}
      </div>
    );
  }
}

export default CssValue
