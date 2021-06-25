import type { FC, CSSProperties, KeyboardEvent } from '../types';

import hooks from '../hooks';

import isKeyEnter from './isKeyEnter';
import C from '../styles/Color';

const { useCallback } = hooks;

const CL = 'chb';

const S_DIV: CSSProperties = { transform: 'scale(1.2)' }
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
      if (!value) { onCheck() }
      else { onUnCheck() }
  }, [value, onCheck, onUnCheck])
  , _hKeyDown = useCallback((evt: KeyboardEvent) => {
      if (isKeyEnter(evt)){
        evt.preventDefault()
        _hClick()
      }
    }, [_hClick]);
  const _restStroke = value
    ? checkedRestStroke : C.INPUT_GREY
  , _restFill = value
    ? checkedRestFill : C.BLANK;
  return (
    <div       
       id={id}
       role="checkbox"
       tabIndex={0}
       aria-checked={value}
       className={CL}
       style={{ ...S_DIV, ...style }}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <svg
        viewBox="0 0 16 16" width="100%" height="100%"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
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
