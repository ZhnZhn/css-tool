import type { CSSProperties } from '../types';
import type { ShadowType } from './types';

import CssValue from './CssValue';
import RaisedButton from '../zhn/RaisedButton';

const CL_PAGE_SB_CSS = "page-sb__css"
, CL_CSS_PROPERTY = "css-property"
, CL_CSS_VALUE = "css-value";

const S_EDITED: CSSProperties = {
  borderBottom: '2px solid green'
}; 

interface CssValueProps {
  boxShadows?: ShadowType[],
  currentIndex: number,
  onAdd: (n: number) => void;
  onEdit: (n: number) => void;
  onRemove: (n: number) => void;
}

const _renderValues = (props: CssValueProps) => {
  const { 
    boxShadows=[], 
    currentIndex, 
    onAdd, 
    onEdit, 
    onRemove 
  } = props
  , max = boxShadows.length-1;  
  return boxShadows.map((item, index) => {     
     const _sufix = index !== max ? "," : ";"
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
           onClick={() => onEdit(index)}
         >
           <CssValue 
             item={item}
             sufix={_sufix}
           />            
         </span>        
         {/* eslint-enable jsx-a11y/no-static-element-interactions */ }
         {/* eslint-enable jsx-a11y/click-events-have-key-events */ }
         <RaisedButton          
           caption="ADD"
           onClick={() => onAdd(index)}
         />
         {index !== 0  && <RaisedButton            
            caption="REMOVE"
            onClick={() => onRemove(index)}
          />
         }
       </div>
     )
  })
};

const CssValues = (
  props: CssValueProps
) => (
  <div className={CL_PAGE_SB_CSS}>
    <div className={CL_CSS_PROPERTY}>BOX-SHADOW:</div>
    {_renderValues(props)}
  </div>
);

export default CssValues
