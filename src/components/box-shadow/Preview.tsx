import type { ShadowType, ConfigStyleType } from './types';

import { toCssValue } from './helpers/fn';

interface PreviewProps {
  boxShadows?: ShadowType[];
  configStyle?: ConfigStyleType
}

const CL_PREVIEW = "page-sb__preview"
, CL_INNER = "page-sb__preview__inner";

const _crBoxShadowStyle = (boxShadows: ShadowType[]) => ({
  boxShadow: boxShadows.map(toCssValue).join(',')
});

const Preview = ({ 
  boxShadows=[], 
  configStyle
}: PreviewProps) => {
   const _style = _crBoxShadowStyle(boxShadows)
   , { 
     bgColor, 
     boxColor, 
     boxBorderRadius 
   } = configStyle || {}
   , _rootStyle = { backgroundColor: bgColor }
   , _boxStyle = {
        backgroundColor: boxColor,
        borderRadius: boxBorderRadius
      };
   return (
     <div className={CL_PREVIEW} style={_rootStyle}>
       <div className={CL_INNER} style={{ ..._boxStyle, ..._style }} />
     </div>
   );
};

export default Preview
