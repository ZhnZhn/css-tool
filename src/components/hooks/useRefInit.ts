import type { MutableRef } from '../types';
import { useRef } from '../uiApi';

function useRefInit<T> (crValue: () => T) {
  const ref = useRef<T>() as MutableRef<T>;
  if (ref.current === void 0) {
    ref.current = crValue()
  }
  return ref;
}

export default useRefInit