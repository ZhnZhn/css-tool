
import type { ShadowType, ConfigStyleType } from './types';

import crId from '../../utils/crId';

export const SET_CURRENT_SHADOW = 'SET_CURRENT_SHADOW'
export const UPDATE_SHADOWS = 'UPDATE_SHADOWS'
export const ADD_SHADOW = 'ADD_SHADOW'
export const REMOVE_SHADOW = 'REMOVE_SHADOW'
export const UPDATE_CONFIG = 'UPDATE_CONFIG'

type ActionType = typeof SET_CURRENT_SHADOW
  | typeof UPDATE_SHADOWS
  | typeof ADD_SHADOW
  | typeof REMOVE_SHADOW
  | typeof UPDATE_CONFIG


export type PageActionType = {
  type: ActionType;

  boxShadow?: ShadowType;

  propName?: keyof ConfigStyleType; 
  value?: unknown;

  fromIndex?: number;
  editIndex?: number;
  removeIndex?: number;
}

const DF_SHADOW: ShadowType = {
   isInset: false,
   gLength: 10,
   vLength: 10,
   blurR: 5,
   spreadR: 0,
   color: '#000000',
   opacity: 0.75,
   id: crId()
}

export type PageStateType = {
  currentIndex: number,
  boxShadows: ShadowType[],
  configStyle: ConfigStyleType
} 
  
export const INITIAL_STATE: PageStateType = {
  currentIndex: 0,
  boxShadows: [ DF_SHADOW ],
  configStyle: {
    bgColor: 'gray',
    boxColor: '#e7a61a',
    boxBorderRadius: '0px'
  }
};