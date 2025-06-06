import type { CSSProperties } from '../types';
import type { InputInnerRefType } from './useInputValue';
 
import { useCallback } from '../uiApi';
import {
  CL_INPUT,
  useInputValue 
} from './useInputValue';
import getNumberValue from './getNumberValue';

type NumberType = number | string
export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;
  initialValue: NumberType;  
  step?: number;
  min: number;
  max: number;
  innerRef?: InputInnerRefType;
  onChange?: (value: NumberType) => void;
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
  ] = useInputValue<NumberType>(props, _getValue);     
  
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
