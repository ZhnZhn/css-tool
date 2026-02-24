import type { Ref } from 'preact'
import type { MutableRef } from './types';

import {
  useRef,
  useImperativeHandle
} from 'preact/hooks';

export { 
  useId,
  useRef,
  useState, 
  useReducer, 
  useCallback,
  useMemo, 
  useEffect 
} from 'preact/hooks';

export function getRefValue<T> (ref: MutableRef<T>) {
  return ref.current;
}

type Inputs = readonly unknown[]
export function useImperativeHandleOr<T, R extends T>(
	ref: Ref<T> | undefined,
	create: () => R,
	inputs?: Inputs
): void {
  const _ref = useRef<T>(null);
  /* eslint-disable react-hooks/exhaustive-deps */
  useImperativeHandle(ref || _ref, create, inputs)
  /* eslint-enable react-hooks/exhaustive-deps */
}

const _isArr = Array.isArray;
export const safeMap = <T, U>(
  arrOr: unknown, 
  fn: (value: T, index: number, array: T[]) => U
) => _isArr(arrOr) 
  ? arrOr.map(fn)
  : []  