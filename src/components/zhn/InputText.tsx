import type { 
  FC, 
  CSSProperties, 
  RefObject, 
  ChangeEvent, 
  KeyboardEvent 
} from '../types';

import {
  useRef, 
  useCallback,  
  useImperativeHandle
} from '../uiApi';
import useValue from './useValue';

import crId from '../../utils/crId';

const CL_INPUT_TEXT = 'input-text box-shadow';

type InnerRefType = {
  setValue: (value: any) => void
}

export interface InputTextProps {
  style?: CSSProperties;  
  id?: string;
  inputId?: string;  
  initialValue?: string;
  innerRef?: RefObject<InnerRefType>;
  onChange?: (value: any) => void;
  onEnter?: (value: any) => void;
}

const _FN_NOOP = () => {}

const InputText: FC<InputTextProps, false> = ({
  id,
  style,  
  initialValue='',
  inputId,  
  innerRef,
  onChange=_FN_NOOP,
  onEnter=_FN_NOOP
}) => {
  const [
    value, 
    setValue
  ] = useValue(initialValue, inputId)   
  , _refId = useRef<string>(id || crId())  
  /*eslint-disable react-hooks/exhaustive-deps */
  , _hInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget              
      setValue({ value })
      onChange(value)
    }, [])
    //onChange
  , _hKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
      if (event.keyCode === 13){                
        onEnter(event.currentTarget.value)
      }
    }, []);
    //onEnter      

  useImperativeHandle(innerRef!, () => ({
    setValue: (value) => setValue({ value })
  }), [])
  // setValue
  /*eslint-enable react-hooks/exhaustive-deps */ 
  
  return (
    <input
      type="text"
      id={_refId.current}      
      className={CL_INPUT_TEXT}
      style={style}
      value={value}
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
      translate="no"
      maxLength={25}
      //onChange={_hInputChange}
      onInput={_hInputChange}
      onKeyDown={_hKeyDown}
    />
  );
};

export default InputText
