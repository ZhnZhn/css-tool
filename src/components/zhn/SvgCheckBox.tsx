import type { FC, CSSProperties } from '../types';

import { useCallback } from '../uiApi';
import useKeyEnter from '../hooks/useKeyEnter';

import C from '../styles/Color';

const CL_CHB = 'chb'
, S_SVG: CSSProperties = { display: 'inline-block' };

interface SvgCheckedProps {
  stroke: string;
}

const SvgChecked: FC<SvgCheckedProps, false> = ({ 
  stroke 
}) => (
  <path
     d="M 2,5 L 8,14 14,1"     
     stroke={stroke}
     fill={C.BLANK}
  />
);

export interface SvgCheckBoxProps {  
  id?: string;
  style?: CSSProperties;  
  checkedRestStroke?: string;
  checkedRestFill?: string; 
  checkedColor?: string;  
  value: boolean;
  onCheck?: () => void;
  onUnCheck?: () => void;
}

const _fnNoop = () => {}

const SvgCheckBox: FC<SvgCheckBoxProps, false> = ({  
  id,
  style,
  checkedRestStroke=C.INPUT_BLUE,
  checkedRestFill=C.INPUT_BLUE,
  checkedColor=C.BG_GREY,
  value,
  onCheck=_fnNoop,
  onUnCheck=_fnNoop
}) => {
  const _hClick = useCallback(() => {
    const _setValue = value 
      ? onUnCheck
      : onCheck;
    _setValue();        
  }, [value, onCheck, onUnCheck])
  , _hKeyDown = useKeyEnter(_hClick)
  , [
    _restStroke,
    _restFill
  ] = value 
    ? [checkedRestStroke, checkedRestFill]
    : [C.INPUT_GREY, C.BLANK];  
  
  return (
    <div       
       id={id}
       role="checkbox"
       tabIndex={0}
       aria-checked={value}
       className={CL_CHB}
       style={style}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 16 16" 
        width="100%" 
        height="100%"                 
        style={S_SVG}
        stroke-width="2"
        stroke-linecap="round"
      >
        <rect
           x="1" y="1"
           height="14" width="14"           
           rx="3"
           stroke={_restStroke}
           fill={_restFill}
        />
        { value
           ? <SvgChecked stroke={checkedColor} />
           : null
        }
      </svg>
    </div>
  );
};

export default SvgCheckBox
