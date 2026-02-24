import { 
  useState, 
  useCallback,
  useEffect 
} from '../uiApi';

type UseObjValueType = <T>(initialValue: T) => [T, (value: T) => void]

const useObjValue: UseObjValueType = <T>(initialValue: T) => {
  const [
    { value }, 
    setValue
  ] = useState(() => ({ value: initialValue }))
  , _setValue = useCallback(
    (value: T) => setValue({ value }), 
    []
  );

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    _setValue(initialValue)
  }, [initialValue]);
  /* eslint-enable react-hooks/exhaustive-deps */
  
  return [
    value,
    _setValue
  ];
}

export default useObjValue