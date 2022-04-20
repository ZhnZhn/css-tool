import type { FC, CSSProperties, RefObject, ChangeEvent, KeyboardEvent } from '../types';

import {  
  useRef, 
  useCallback, 
  useImperativeHandle
} from '../uiApi';
import useValue from './useValue';

import crId from '../../utils/crId';

const CL_INPUT_TEXT = 'input-text box-shadow';

type InnerRefType = {
  setValue: (initValue: any) => void
}

export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;
  inputId?: string;
  initialValue: number;  
  step?: number;
  min: number;
  max: number;
  innerRef?: RefObject<InnerRefType>;
  onChange?: (value: string) => void;
  onEnter?: (value: any) => void;
}

const _FN_NOOP = () => {}

const _getValueNumber = (
  value: string, 
  min: number, 
  max: number
): number => {
  const _v = parseFloat(value);
  return _v > max
    ? max
    : _v < min ? min : _v;
};

const InputNumber: FC<InputTextProps, false> = ({
  id,
  style,  
  initialValue,
  inputId,
  step=1,
  min,
  max,
  innerRef,
  onChange=_FN_NOOP,
  onEnter=_FN_NOOP
}) => {
  const [
     value, 
     setValue
  ] = useValue(initialValue, inputId)   
  , _refId = useRef<string>(id || crId())  
  , _getValue = useCallback((value: string) => 
       _getValueNumber(value, min, max), 
       [min, max]
    )
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget
      , _value = _getValue(value)
      setValue({value: _value})
      onChange(''+_value)
    }, [_getValue])
    //onChange
  , _hKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13){                
        onEnter(event.currentTarget.value)
      }
    }, []);
    //onEnter    

  useImperativeHandle(innerRef!, () => ({
    setValue: (nextValue) => setValue({ value: _getValue(nextValue) })
  }), [_getValue])
  // setValue
  /*eslint-enable react-hooks/exhaustive-deps */ 

  return (
    <input
      type="number"
      id={_refId.current}            
      className={CL_INPUT_TEXT}
      style={style}
      value={value}
      min={min}
      max={max}
      step={step}
      //onChange={_hInputChange}
      onInput={_hInputChange}
      onKeyDown={_hKeyDown}
    />
  );
};

export default InputNumber
