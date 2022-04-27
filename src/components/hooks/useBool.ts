import { useState, useMemo } from '../uiApi';

const useBool = (initialValue: any): [
  boolean, 
  () => void, 
  () => void
] => {
  const [
    is, 
    setIs
  ] = useState(() => !!initialValue)  
  , [ 
    setTrue, 
    setFalse
  ] = useMemo(() => [
    () => setIs(true),
    () => setIs(false)
  ], []);      
  return [is, setTrue, setFalse];
};

export default useBool