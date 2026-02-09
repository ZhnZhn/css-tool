import { useRef } from '../uiApi';

function useRefInit<T> (crValue: () => T) {
  const ref = useRef<T>(null);
  if (ref.current == null) {
    ref.current = crValue()
  }
  return ref;
}

export default useRefInit