import { h } from 'preact'

import RaisedButton from '../zhn/RaisedButton'
import fn from './helpers/fn'

const CL = "page-sb__css";

const S = {
  TITLE: {
    color: '#80c040',
    fontSize: '20px',
    fontWeight: 'bold'
  },
  VALUE: {
    color: 'darkslateblue',
    fontSize: '20px',
  },
  EDITED: {
    borderBottom: '2px solid green'
  },
  BT: {
    width: 70
  },
  BT_R: {
     width: 100
  }
}


const _renderValues = options => {
  const { boxShadows=[], currentIndex, onAdd, onEdit, onRemove } = options
  const max = boxShadows.length-1
  return boxShadows.map((item, index) => {
     const _sufix = index !== max ? "," : ";"
     , _styleValue = index === currentIndex
           ? S.EDITED
           : null;
     return (
       <div key={index} >
         <span style={{...S.VALUE, ..._styleValue }}>
           {`${fn.toCssValue(item)}${_sufix}`}
         </span>

         <RaisedButton
           style={S.BT}
           caption="EDIT"
           onClick={onEdit.bind(null, index)}
         />
         <RaisedButton
           style={S.BT}
           caption="ADD"
           onClick={onAdd.bind(null, index)}
         />
         {index !== 0  && <RaisedButton
            style={S.BT_R}
            caption="REMOVE"
            onClick={onRemove.bind(null, index)}
          />
         }
       </div>
     )
  })
};

const CssValue = props => (
  <div className={CL}>
    <div style={S.TITLE}>BOX-SHADOW:</div>
    {_renderValues(props)}
  </div>
);

/*
CssValue.propTypes = {
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
*/

export default CssValue
