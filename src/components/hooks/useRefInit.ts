import type { MutableRef } from '../types';
import { useRef } from '../uiApi';

function useRefInit<T> (crValue: () => T) {
  const ref = useRef<T>(null) as MutableRef<T>;
  if (ref.current === null) {
    ref.current = crValue()
  }
  return ref;
}

export default useRefInit