import type { CSSProperties, FC, MouseEvent } from '../types';

import { 
  useRef, 
  useCallback 
} from '../uiApi';
import has from '../has';
import crCn from '../crCn';

import CaptionInput from './CaptionInput';

const { HAS_TOUCH } = has;

const CL_BT = 'bt-flat'
, CL_BT_DIV = 'bt-flat__div'
, CL_BT_SPAN = 'bt-flat__span';

const S_PRIMARY: CSSProperties = {
  color: '#607d8b'
};

export interface FlatButtonProps {
  className?: string; 
  style?: CSSProperties;
  clDiv?: string; 
  isPrimary?: boolean
  title?: string;
  caption: string; 
  accessKey?: string;
  timeout?: number;
  onClick: (evt: MouseEvent) => void;  
}

const FlatButton: FC<FlatButtonProps> = ({
  className, style, clDiv=CL_BT_DIV, 
  isPrimary, title='', caption, accessKey,
  timeout=3000,
  onClick,
  children
}) => {
  const _refBt = useRef<HTMLButtonElement>(null)
  , _refTimeStamp = useRef<number>(0)  
  , _hClick = useCallback((event: MouseEvent<HTMLButtonElement>) => {        
    if (timeout !== 0) {
      const _timeStamp = _refTimeStamp.current
      , { timeStamp } = event;
      if (_timeStamp && timeStamp - _timeStamp > timeout) {
        onClick(event)  
      }
      _refTimeStamp.current = timeStamp      
    } else {
      onClick(event)
    }  
  }, [timeout, onClick])  
  , _style = isPrimary
       ? {...style, ...S_PRIMARY }
       : style
  , _className = crCn(CL_BT, className)       
  , _accessKey = HAS_TOUCH
       ? void 0
       : accessKey
  , _title = _accessKey
       ? `${title} [${accessKey}]`
       : title;
  return (
    <button
      ref = {_refBt}      
      className={_className}
      style={_style}
      accessKey={_accessKey}
      tabIndex={0}
      title={_title}
      onClick={_hClick}
    >
      <div className={clDiv}>
        <CaptionInput
          className={CL_BT_SPAN}
          caption={caption}
          accessKey={_accessKey}
        />
        {children}
      </div>
    </button>
  );
}

export default FlatButton
