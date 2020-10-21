import hooks from '../hooks'

import isKeyEnter from './isKeyEnter'
import C from '../styles/Color';

const { useCallback } = hooks

const S = {
  DIV: {
    display: 'inline-block',
    width: 16,
    height: 16,
    transform: 'scale(1.2)',
    cursor: 'pointer'
  },
  SVG: {
    display: 'inline-block'
  }
};

const SvgChecked = ({ stroke }) => (
  <path
      d="M 2,5 L 8,14 14,1"
      stroke-width="2"
      stroke-linecap="round"
      stroke={stroke}
      fill={C.BLANK}
  />
);

const SvgCheckBox = ({
  style,
  checkedRestStroke=C.INPUT_BLUE,
  checkedRestFill=C.INPUT_BLUE,
  checkedColor=C.BG_GREY,
  value,
  onCheck=()=>{},
  onUnCheck=()=>{}
}) => {
  const _hClick = useCallback(() => {
      if (!value) { onCheck() }
      else { onUnCheck() }
  }, [value, onCheck, onUnCheck])
  , _hKeyDown = useCallback(evt => {
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
       role="checkbox"
       tabIndex="0"
       aria-checked={value}
       style={{ ...S.DIV, ...style }}
       onClick={_hClick}
       onKeyDown={_hKeyDown}
    >
      <svg
        viewBox="0 0 16 16" width="100%" height="100%"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
        style={S.SVG}
      >
        <rect
           x="1" y="1"
           height="14" width="14"
           stroke-width="2" rx="3"
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
