import hooks from '../hooks'

const { useState, useCallback } = hooks;

const useToggle = function(initialValue) {
  const [is, setIs] = useState(initialValue)
  , toggle = useCallback(()=>setIs(v=>!v), [])
  return [is, toggle];
};

export default useToggle
