import { RefObject } from './types';

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

export function getRefValue<T> (ref: RefObject<T>) {
  return ref.current;
}