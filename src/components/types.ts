export type { 
  CSSProperties,
  MouseEvent, 
  TouchEvent,
  KeyboardEvent, 
  ChangeEvent
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent

export type { RefObject } from 'preact';
export type { 
  Ref, 
  MutableRef, 
  StateUpdater 
} from 'preact/hooks';

export type { 
  TinycolorInstance,
  HSLA 
} from '../tinycolor/types';

export type EmptyObjType = Record<string, never>

type VElemType = JSX.Element | null 
export type ChildrenType = VElemType
export type FC<T = EmptyObjType, IS = true> = IS extends true 
  ? { (props: T & { children?: ChildrenType }): VElemType} 
  : { (props: T): VElemType }

export type IsNotShouldUpdate<T> = {
  (prevProps: T, nextProps: T): boolean  
}

export type ReducerType<S, A> = {
  (state: Readonly<S>, action: A): S
}

