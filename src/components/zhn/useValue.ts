import type { StateUpdater } from '../types';
import { 
  useState,
  useEffect
} from '../uiApi';

type StrOrNumber = string | number
type ValueType<T> = {
    value: T
}
type UseValueType = (
   initialValue: StrOrNumber,
   id: string | undefined
) => [ 
  value: typeof initialValue,
  setValue: StateUpdater<ValueType<typeof initialValue>>
]

const useValue: UseValueType = (
 initialValue,
 id
) => {
   const _initValue = () => ({ value: initialValue }) 
   , [
      { value },
      setValue
    ] = useState(_initValue);

    /*eslint-disable react-hooks/exhaustive-deps */
    useEffect(() => {
       setValue(_initValue) 
    }, [id])
    // _initValue
    /*eslint-enable react-hooks/exhaustive-deps */

    return [value, setValue];
};

export default useValue