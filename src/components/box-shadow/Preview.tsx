import type { 
  CSSProperties 
} from '../types';
import type { 
  ShadowType, 
  ConfigStyleType 
} from './types';

import { safeMap } from '../uiApi';
import { 
  CL_PREVIEW,
  CL_PREVIEW_INNER,
  toCssValue 
} from './cssFn';

interface PreviewProps {
  boxShadows?: ShadowType[];
  configStyle?: ConfigStyleType
}

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
     width,
     height,
     isBoxResize 
  } = props.configStyle || {}; 
  return (
    <div 
      className={CL_PREVIEW} 
      style={{ backgroundColor: bgColor }}>
        <div 
          className={CL_PREVIEW_INNER} 
          style={{
            width,
            height,
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
