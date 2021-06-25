import type { CSSProperties, FC } from '../types';
import type { ShadowType } from './types';

import RaisedButton from '../zhn/RaisedButton';
import fn from './helpers/fn';

const CL = "page-sb__css"
, CL_CSS_PROPERTY = "css-property"
, CL_CSS_VALUE = "css-value"
, CL_CSS_TOKEN = "css-token";

const S_EDITED: CSSProperties = {
  borderBottom: '2px solid green'
}, S_BT: CSSProperties = {
  width: 70
}, S_BT_R: CSSProperties = {
  width: 100
}; 

interface CssTokenProps {
  title: string;
  id: string;
}

const _onClick = (name: string) => {
  document.getElementById(name)?.focus()
};

/* eslint-disable jsx-a11y/no-static-element-interactions */ 
/* eslint-disable jsx-a11y/click-events-have-key-events */ 
const CssToken: FC<CssTokenProps, false> = ({ title, id}) => ( 
  <span 
    tabIndex={-1}
    className={CL_CSS_TOKEN}    
    onClick={_onClick.bind(null, id)}
  >
     {title}
  </span>
)
/* eslint-enable jsx-a11y/no-static-element-interactions */ 
/* eslint-enable jsx-a11y/click-events-have-key-events */ 

interface CssValueProps {
  boxShadows?: ShadowType[],
  currentIndex: number,
  onAdd: (n: number) => void;
  onEdit: (n: number) => void;
  onRemove: (n: number) => void;
}

const _renderValues = (props: CssValueProps) => {
  const { boxShadows=[], currentIndex, onAdd, onEdit, onRemove } = props
  , max = boxShadows.length-1;  
  return boxShadows.map((item, index) => {
     const { 
       isInset,
       gLength, vLength,
       blurR, spreadR,
       opacity 
      } = item
     , _sufix = index !== max ? "," : ";"
     , _styleValue = index === currentIndex
           ? S_EDITED
           : void 0;
     return (
       <div key={index} >
         {/* eslint-disable jsx-a11y/no-static-element-interactions */ }
         {/* eslint-disable jsx-a11y/click-events-have-key-events */ }
         <span            
           tabIndex={-1}
           className={CL_CSS_VALUE}
           style={_styleValue}
           onClick={onEdit.bind(null, index)}
         >
           {isInset && <CssToken title="inset" id="inset"/>}                      
           <CssToken 
             title={gLength + 'px'}
             id="horizontal-length"             
           />            
           <CssToken 
             title={vLength + 'px'}
             id="vertical-length"             
           />            
           <CssToken 
             title={blurR + 'px'}
             id="blur-radius"
           />            
           <CssToken 
             title={spreadR + 'px'}
             id="spread-radius"             
           />            
           <CssToken 
             title={fn.toRgba(item)}
             id="shadow-color"             
           />            
           <CssToken 
             title={`${opacity})${_sufix}`}
             id="opacity"             
           />                       
         </span>        
         {/* eslint-enable jsx-a11y/no-static-element-interactions */ }
         {/* eslint-enable jsx-a11y/click-events-have-key-events */ }
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
    <div className={CL_CSS_PROPERTY}>BOX-SHADOW:</div>
    {_renderValues(props)}
  </div>
);

export default CssValue
