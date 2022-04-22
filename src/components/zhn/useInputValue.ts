import type { 
  RefObject, 
  KeyboardEvent,
  ChangeEvent 
} from '../types';
import { 
  useRef,
  useState,
  useCallback,
  useImperativeHandle 
} from '../uiApi';

import crId from '../../utils/crId';

export const CL_INPUT = 'input-text box-shadow'

type InputType = {
  setValue: (initValue: any) => void
}
export type InputInnerRefType = RefObject<InputType>
type PropsType<T> = {
  innerRef?: InputInnerRefType,
  id?: string,
  initialValue: T,
  onEnter?: (value: string) => void,
  onChange?: (value: T) => void
}

type UseInputTupleType<T> = [
  id: string,
  value: T,
  hKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void,
  hInputChange: (event: ChangeEvent<HTMLInputElement>) => void
]
 

type GetValueType<T> = (value: unknown) => T

const _FN_NOOP = () => {};
const _FN_IDENTITY = <T>(v: unknown): T => v as T;

export function useInputValue<T>(
  props: PropsType<T>,
  getValue: GetValueType<T> = _FN_IDENTITY
): UseInputTupleType<T> {  
    const {
      innerRef, 
      id,
      initialValue,
      onEnter=_FN_NOOP,
      onChange=_FN_NOOP
    } = props
    , _refId = useRef<string>(id || crId()) 
    , [
        { value },
        _setValue
      ] = useState(() => ({ value: initialValue}))
    , setValue = useCallback(
         (value: T) => _setValue({ value })
      , [])
    , hKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
        if (event.keyCode === 13){                
          onEnter(event.currentTarget.value)
        }
    }, [onEnter])
    /*eslint-disable react-hooks/exhaustive-deps */ 
    , hInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
       const { value } = event.currentTarget
       , _value = getValue(value)      
       setValue(_value)
       onChange(_value)
    }, [getValue, onChange]); 
    // setValue   
 
    useImperativeHandle(innerRef!, () => ({
      setValue: (nextValue: unknown) => setValue(getValue(nextValue))
    }), [getValue])
    // setValue
    /*eslint-enable react-hooks/exhaustive-deps */

    return [
       _refId.current,
       value, 
       hKeyDown,
       hInputChange
   ];
}