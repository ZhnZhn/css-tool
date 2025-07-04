import type { CSSProperties } from "../types";

import {
  useId,
  useState
} from "../uiApi";

import crCn from "../crCn";

const CL_SWITCH = "switch"
, CL_LABEL_SWITCH = `label-${CL_SWITCH}`
, CL_SWITCH_TRACK = `${CL_SWITCH}-track`
, CL_SWITCH_THUMB = `${CL_SWITCH}-thumb`
, CL_SWITCH_LABEL = `${CL_SWITCH}-label`
, TRACK_COLOR_CHECKED = "#756294"
, THUMB_COLOR_CHECKED = "#00bcd4"
, THUMB_POS_X_CHECKED = "16px"
, LABEL_COLOR_CHECKED = "black"
, TRACK_COLOR = "#9e9e9e"
, THUMB_COLOR = "#d3d3d3"
, THUMB_POS_X = "4px"
, LABEL_COLOR = "#c6c3c3";

const _crSwicthStyle = (
  isChecked: boolean
) => {
  const [
    _trackColor,
    _thumbColor,
    _thumbPosX,
    _labelColor
  ] = isChecked
    ? [TRACK_COLOR_CHECKED, THUMB_COLOR_CHECKED, THUMB_POS_X_CHECKED, LABEL_COLOR_CHECKED]
    : [TRACK_COLOR, THUMB_COLOR, THUMB_POS_X, LABEL_COLOR];
  return [
    { backgroundColor: _trackColor },
    {
      backgroundColor: _thumbColor,
      transform: `translate(${_thumbPosX}, -2px)`
    },
    { color: _labelColor }
  ];
};

const FN_NOOP = () => {}

export interface InputSwitchProps {
  initialValue: boolean;
  className?: string;
  style?: CSSProperties;
  caption: string;
  onCheck?: () => void;
  onUnCheck?: () => void; 
}

const InputSwitch = ({
  initialValue,
  className,
  style,
  caption,
  onCheck = FN_NOOP,
  onUnCheck = FN_NOOP,
}: InputSwitchProps) => {
  const _inputId = useId()
  , [
    _isChecked,
    _setIsChecked
  ] = useState(initialValue)
  , _hChange = () => {
      const _nextValue = !_isChecked
      , _onChange = _nextValue
         ? onCheck
         : onUnCheck;
      _onChange()
      _setIsChecked(_nextValue);
    }
  , [
    _trackStyle,
    _thumbStyle,
    _labelStyle
  ] = _crSwicthStyle(_isChecked);
  
  return (
    <label
      className={crCn(CL_LABEL_SWITCH, className)}
      style={style}      
      htmlFor={_inputId}
    >    
      <input
        id={_inputId}
        type="checkbox"
        role="switch"
        className={CL_SWITCH}
        aria-checked={_isChecked}
        checked={_isChecked}
        onChange={_hChange}
      />
      <span
        aria-hidden="true"
        className={CL_SWITCH_TRACK}
        style={_trackStyle}
      >
        <span
          className={CL_SWITCH_THUMB}
          style={_thumbStyle}
        />
      </span>
      <span
        className={CL_SWITCH_LABEL}
        style={_labelStyle}
      >
       {caption}
      </span>
    </label>
  );
}

export default InputSwitch
