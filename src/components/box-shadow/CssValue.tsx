import type { CSSProperties, FC } from '../types';
import type { ShadowType } from './types';

import RaisedButton from '../zhn/RaisedButton';
import fn from './helpers/fn';

const CL = "page-sb__css";

const S_TITLE: CSSProperties = {
  color: '#80c040',
  fontSize: '20px',
  fontWeight: 'bold'
}, S_VALUE: CSSProperties = {
  color: 'darkslateblue',
  fontSize: '20px',
}, S_EDITED: CSSProperties = {
  borderBottom: '2px solid green'
},S_BT: CSSProperties = {
  width: 70
},S_BT_R: CSSProperties = {
  width: 100
}

interface CssValueProps {
  boxShadows?: ShadowType[],
  currentIndex: number,
  onAdd: (n: number) => void;
  onEdit: (n: number) => void;
  onRemove: (n: number) => void;
}

const _renderValues = (props: CssValueProps) => {
  const { boxShadows=[], currentIndex, onAdd, onEdit, onRemove } = props
  const max = boxShadows.length-1
  return boxShadows.map((item, index) => {
     const _sufix = index !== max ? "," : ";"
     , _styleValue = index === currentIndex
           ? S_EDITED
           : null;
     return (
       <div key={index} >
         <span style={{...S_VALUE, ..._styleValue }}>
           {`${fn.toCssValue(item)}${_sufix}`}
         </span>

         <RaisedButton
           style={S_BT}
           caption="EDIT"
           onClick={onEdit.bind(null, index)}
         />
         <RaisedButton
           style={S_BT}
           caption="ADD"
           onClick={onAdd.bind(null, index)}
         />
         {index !== 0  && <RaisedButton
            style={S_BT_R}
            caption="REMOVE"
            onClick={onRemove.bind(null, index)}
          />
         }
       </div>
     )
  })
};

const CssValue: FC<CssValueProps, false> = props => (
  <div className={CL}>
    <div style={S_TITLE}>BOX-SHADOW:</div>
    {_renderValues(props)}
  </div>
);

export default CssValue
