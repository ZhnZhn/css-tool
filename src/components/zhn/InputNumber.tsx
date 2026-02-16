import type { CSSProperties } from '../types';
import type { InputInnerRef } from './useInputValue';
 
import { useCallback } from '../uiApi';
import {
  CL_INPUT,
  useInputValue 
} from './useInputValue';
import getNumberValue from './getNumberValue';

export type InputNumberType = number | string
export type InputNumberRef = InputInnerRef<InputNumberType>
export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;
  initialValue?: InputNumberType;  
  step?: number;
  min: number;
  max: number;
  innerRef?: InputNumberRef;
  onChange?: (value: InputNumberType) => void;
  onEnter?: (value: string) => void;
}

const InputNumber = (props: InputTextProps) => {
  const {  
    style,      
    step=1,
    min,
    max
  } = props
  , _getValue = useCallback((value: unknown) => 
     getNumberValue(value, min, max), 
     [min, max]
  )
  , [
     id,
     value, 
     hKeyDown,
     hInput
  ] = useInputValue<InputNumberType>(props, _getValue);     
  
  return (
    <input
      type="number"
      id={id}            
      className={CL_INPUT}
      style={style}
      value={value}
      min={min}
      max={max}
      step={step}
      //onChange={hInput} 
      onInput={hInput}     
      onKeyDown={hKeyDown}
    />
  );
};

export default InputNumber
