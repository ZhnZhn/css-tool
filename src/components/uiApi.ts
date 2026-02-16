import type { MutableRef } from './types';

export { 
  useId,
  useState, 
  useCallback,
  useMemo, 
  useReducer, 
  useEffect, 
  useRef, 
  useImperativeHandle 
} from 'preact/hooks';

export function getRefValue<T> (ref: MutableRef<T>) {
  return ref.current;
}