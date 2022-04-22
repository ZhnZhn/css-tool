import { Ref } from './types';
/* 
export { 
  useState, 
  useCallback, 
  useReducer, 
  useEffect, 
  useRef, 
  useImperativeHandle 
} from 'preact/hooks/dist/hooks'
*/

export { 
  useState, 
  useCallback,
  useMemo, 
  useReducer, 
  useEffect, 
  useRef, 
  useImperativeHandle 
} from 'preact/hooks';

export { Component, createRef } from 'preact';

export function getRefValue<T> (ref: Ref<T>) {
  return ref.current;
}