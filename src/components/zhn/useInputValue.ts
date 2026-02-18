import type { 
  MutableRef,
  KeyboardEvent,
  ChangeEvent 
} from '../types';

import crId from '../../utils/crId';

import { 
  useRef,
  useCallback,
  useImperativeHandle 
} from '../uiApi';

import useObjValue from '../hooks/useObjValue';

export const CL_INPUT = 'input-text box-shadow'

export type InputType<T> = {
  setValue: (initValue: T) => void
}
export type InputInnerRef<T> = MutableRef<InputType<T> | null>

type PropsType<T> = {
  innerRef?: InputInnerRef<T>,
  id?: string,
  initialValue?: T,
  onEnter?: (value: string) => void,
  onChange?: (value: T) => void
}

type UseInputTupleType<T> = [
  id: string,
  value: T | undefined,
  hKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void,
  hInputChange: (event: ChangeEvent<HTMLInputElement>) => void
]
 
type GetValueType<T> = (value: unknown) => [T, boolean]

const _FN_NOOP = () => {};
const _DF_GET_VALUE = <T>(v: unknown): [T, boolean] => [v as T, true];

export function useInputValue<T>(
  props: PropsType<T>,
  getValue: GetValueType<T> = _DF_GET_VALUE
): UseInputTupleType<T> {  
    const {
      innerRef, 
      id,
      initialValue,
      onEnter=_FN_NOOP,
      onChange=_FN_NOOP
    } = props
    , _innerRef = useRef()
    , _refId = useRef<string>(id || crId()) 
    , [
      value, 
      setValue
    ] = useObjValue<T | undefined>(initialValue)    
    , hKeyDown = useCallback((evt: KeyboardEvent<HTMLInputElement>) => {
        if (evt.keyCode === 13){                
          onEnter(evt.currentTarget.value)
        }
    }, [onEnter])
    /*eslint-disable react-hooks/exhaustive-deps */ 
    , hInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
       const { value } = evt.currentTarget
       , [_value, isOnChange] = getValue(value)      
       setValue(_value)
       if (isOnChange) {
         onChange(_value)
       }
    }, [getValue, onChange]); 
    // setValue   
 
    useImperativeHandle(innerRef || _innerRef, () => ({
      setValue: (nextValue: unknown) => {
        const [value, isOnChange] = getValue(nextValue)
        if (isOnChange) {
          setValue(value)
        }
      }
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