export type { 
  CSSProperties, 
  KeyboardEvent, 
  MouseEvent,
  ChangeEvent,
  PropsWithChildren,
  Ref
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent

export type { RefObject } from 'preact';
export type { 
  MutableRef, 
  Dispatch,
  StateUpdater 
} from 'preact/hooks';

export type { 
  TinycolorInstance,
  HSLA 
} from '../tinycolor/types';

export type EmptyObjType = Record<string, never>

export type IsNotShouldUpdate<T> = {
  (prevProps: T, nextProps: T): boolean  
}

export type ReducerType<S, A> = {
  (state: Readonly<S>, action: A): S
}

