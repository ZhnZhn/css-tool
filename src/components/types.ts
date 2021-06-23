import type { CSSProperties as CSSProps } from 'react';

export type CSSProperties = CSSProps
export type StyleSheet<T extends string> = Record<T, CSSProperties> 

type VElemType = JSX.Element | null 
export type ChildrenType = VElemType
export type FC<T, IS = true> = IS extends true 
  ? { (props: T & { children?: ChildrenType }): VElemType} 
  : { (props: T): VElemType }

export type { MouseEvent } from 'react'

