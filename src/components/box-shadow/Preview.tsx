import type { 
  CSSProperties 
} from '../types';
import type { 
  ShadowType, 
  ConfigStyleType 
} from './types';

import { safeMap } from '../uiApi';
import { toCssValue } from './helpers/fn';

interface PreviewProps {
  boxShadows?: ShadowType[];
  configStyle?: ConfigStyleType
}

const CL_PREVIEW = "page-sb__preview"
, CL_INNER = `${CL_PREVIEW}__inner`;

const _crBoxShadowStyle = (
  boxShadows?: ShadowType[]
): CSSProperties => ({  
  boxShadow: safeMap(boxShadows, toCssValue).join(',')
});

const Preview = (props: PreviewProps) => {  
  const { 
     bgColor, 
     boxColor, 
     boxBorderRadius,
     isBoxResize 
  } = props.configStyle || {}; 
  return (
    <div 
      className={CL_PREVIEW} 
      style={{ backgroundColor: bgColor }}>
        <div 
          className={CL_INNER} 
          style={{
            backgroundColor: boxColor,
            borderRadius: boxBorderRadius,
            resize: isBoxResize ? 'both' : 'none',
            ..._crBoxShadowStyle(props.boxShadows)
          }}         
        />
    </div>
  );
};

export default Preview
