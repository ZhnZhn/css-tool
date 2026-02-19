import type { 
  ShadowType, 
  ConfigStyleType 
} from './types';

import crId from '../../utils/crId';

export const SET_CURRENT_SHADOW = 'SET_CURRENT_SHADOW'
export const UPDATE_SHADOWS = 'UPDATE_SHADOWS'
export const ADD_SHADOW = 'ADD_SHADOW'
export const REMOVE_SHADOW = 'REMOVE_SHADOW'
export const UPDATE_CONFIG = 'UPDATE_CONFIG'

interface ActionUpdateShadows<K extends keyof ShadowType> {
  type: typeof UPDATE_SHADOWS;
  propName: K;
  value: ShadowType[K];
}  
interface ActionUpdateConfig<K extends keyof ConfigStyleType> {
  type: typeof UPDATE_CONFIG;
  propName: K;
  value: ConfigStyleType[K];
}
interface ActionSetCurrentShadow {
  type: typeof SET_CURRENT_SHADOW;
  bsIndex: number
}
interface ActionAddShadow {
  type: typeof ADD_SHADOW;
  bsIndex: number;
}
interface ActionRemoveShadow {
  type: typeof REMOVE_SHADOW;
  bsIndex: number;
}

export type PageActionType = 
 | ActionUpdateShadows<keyof ShadowType>
 | ActionUpdateConfig<keyof ConfigStyleType>
 | ActionSetCurrentShadow
 | ActionAddShadow
 | ActionRemoveShadow

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
    bgColor: 'grey',
    boxColor: '#e7a61a',
    boxBorderRadius: '0px'
  }
}