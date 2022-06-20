import type { 
  FC, 
  CSSProperties
} from '../types';
import type { InputInnerRefType } from './useInputValue';

import {
  CL_INPUT, 
  useInputValue 
} from './useInputValue';

type TextType = string | undefined 

export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;    
  initialValue: TextType;
  innerRef?: InputInnerRefType;
  onChange?: (value: TextType) => void;
  onEnter?: (value: string) => void;
}

const InputText: FC<InputTextProps, false> = (props) => {
  const {        
    style    
  } = props
  , [
    id,
    value, 
    hKeyDown,
    hInput
  ] = useInputValue<TextType>(props);
  
  return (
    <input
      type="text"
      id={id}      
      className={CL_INPUT}
      style={style}
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
