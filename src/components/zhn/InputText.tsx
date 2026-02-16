import type { CSSProperties } from '../types';
import type { InputInnerRef } from './useInputValue';

import {
  CL_INPUT, 
  useInputValue 
} from './useInputValue';

type InputTextType = string | undefined 
export type InputTextRef = InputInnerRef<InputTextType>
export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;    
  initialValue: InputTextType;
  innerRef?: InputTextRef;
  onChange?: (value: InputTextType) => void;
  onEnter?: (value: string) => void;
}

const InputText = (props: InputTextProps) => {
  const [
    id,
    value, 
    hKeyDown,
    hInput
  ] = useInputValue<InputTextType>(props);
  
  return (
    <input
      type="text"
      id={id}      
      className={CL_INPUT}
      style={props.style}
      value={value}
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      translate="no"
      maxLength={25}
      //onChange={hInput}    
      onInput={hInput}  
      onKeyDown={hKeyDown}
    />
  );
};

export default InputText
