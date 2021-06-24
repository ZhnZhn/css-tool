
import type { ActionHmType } from '../types';
import type { ShadowType, ConfigStyleType } from './types';

import crId from '../../utils/crId';

type ActionType = 'SET_CURRENT_SHADOW'
 | 'UPDATE_SHADOWS'
 | 'ADD_SHADOW'
 | 'REMOVE_SHADOW'
 | 'UPDATE_CONFIG'

export const A: ActionHmType<ActionType> = {
  SET_CURRENT_SHADOW: 'SET_CURRENT_SHADOW',
  UPDATE_SHADOWS: 'UPDATE_SHADOWS',
  ADD_SHADOW: 'ADD_SHADOW',
  REMOVE_SHADOW: 'REMOVE_SHADOW',
  UPDATE_CONFIG: 'UPDATE_CONFIG'
};

export type PageActionType = {
  type: ActionType;

  boxShadow?: ShadowType;

  propName?: keyof ConfigStyleType; 
  value?: any;

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