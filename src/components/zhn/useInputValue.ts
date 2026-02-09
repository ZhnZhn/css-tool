import type { 
  Ref,
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

export type InputType = {
  setValue: (initValue: unknown) => void
}
export type InputInnerRefType = Ref<InputType>

type PropsType<T> = {
  innerRef?: InputInnerRefType,
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
       , [_value, isOnChange] = getValue(value)      
       setValue(_value)
       if (isOnChange) {
         onChange(_value)
       }
    }, [getValue, onChange]); 
    // setValue   
 
    useImperativeHandle(innerRef!, () => ({
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