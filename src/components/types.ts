import {
  Dispatch,
  SetStateAction
} from 'react';

export type DispatchStateUpdater<T> = Dispatch<SetStateAction<T>>

export type { 
  CSSProperties, 
  KeyboardEvent, 
  MouseEvent,
  ChangeEvent,
  PropsWithChildren,
  Ref
} from 'react';

export type MouseOrTouchEvent = MouseEvent | TouchEvent

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

