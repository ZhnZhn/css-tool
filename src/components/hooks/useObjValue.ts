import { 
  useState, 
  useCallback 
} from '../uiApi';

function useObjValue<T>(initialValue: T): [T, (value: T) => void] {
  const [
    { value }, 
    setValue
  ] = useState(() => ({ value: initialValue }))
  , _setValue = useCallback(
    (value: T) => setValue({ value }), 
    []
  );
  return [
    value,
    _setValue
  ];
}

export default useObjValue