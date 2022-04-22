import { useRef } from '../uiApi';

const useRefInit = (crValue: () => any) => {
  const ref = useRef(null);
  if (ref.current === null) {
    ref.current = crValue()
  }
  return ref;
};

export default useRefInit