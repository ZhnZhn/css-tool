import type { CSSProperties as CSSProps } from 'react';

export type CSSProperties = CSSProps
export type StyleSheet<T extends string> = Record<T, CSSProperties> 

export type { MouseEvent, KeyboardEvent, ChangeEvent } from 'react'

export type { RefObject } from 'preact'


export type EmptyObjType = Record<string, never>

type VElemType = JSX.Element | null 
export type ChildrenType = VElemType
export type FC<T = EmptyObjType, IS = true> = IS extends true 
  ? { (props: T & { children?: ChildrenType }): VElemType} 
  : { (props: T): VElemType }


export type IsNotShouldUpdate<T> = {
  (prevProps: T, nextProps: T): boolean  
}

export type ActionHmType<T extends string> = {
  [Key in T] : Key
}

export type ReducerType<S, A> = {
  (state: Readonly<S>, action: A): S
}

