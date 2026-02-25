import type { 
  ReducerType 
} from '../types';
import type { 
  PageStateType, 
  PageActionType 
} from './pageConfig';
import {
  ShadowType
} from './types';

import crId from '../../utils/crId';
import {
  isBool,
  isNumber,
  isStr,
} from '../../utils/isTypeFn';
import {
  imArrInsert,
  imArrUpdate,
  imArrRemove 
} from '../../utils/im-arr';
import { 
  imObjUpdate 
} from '../../utils/im-obj';

import {
  SET_CURRENT_SHADOW,
  UPDATE_SHADOWS,
  ADD_SHADOW,
  REMOVE_SHADOW,
  UPDATE_CONFIG
} from './pageConfig'

type PageReducer = ReducerType<PageStateType, PageActionType>

function updateBoxShadow<K extends keyof ShadowType>(
  boxShadow: ShadowType,
  propName: K,
  value: ShadowType[K]
){
  /*
  if (typeof value !== typeof boxShadow[propName]) {
    throw new Error(`Invalid type for property ${propName}`);
  }*/
  boxShadow[propName] = value
}

const pageReducer: PageReducer = (
  state, 
  action
) => {
  const actionType = action.type;
  switch(actionType) {
    case SET_CURRENT_SHADOW: {
      const { bsIndex } = action;
      return isNumber(bsIndex) ? {
        ...state,
        currentIndex: bsIndex        
      } : state;
    }
    case UPDATE_SHADOWS: {
      const { 
        propName, 
        value 
      } = action
      if (!isStr(propName)) { return state; }

      const { 
        boxShadows, 
        currentIndex 
      } = state
      , boxShadow = state.boxShadows[state.currentIndex]
      updateBoxShadow(boxShadow, propName, value)            
      return {
        ...state,
        boxShadows: imArrUpdate(boxShadows, currentIndex, boxShadow)
      };      
    }
    case ADD_SHADOW: {
      const { bsIndex } = action
      if (!isNumber(bsIndex)) { return state; }

      const { boxShadows, currentIndex } = state
      , _initValue = {...boxShadows[bsIndex]}
      , _index = currentIndex + 1;
      _initValue.id = crId(''+_index)
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArrInsert(boxShadows, _index, _initValue)
      };
    }
    case REMOVE_SHADOW: {      
      const { bsIndex } = action;
      if (!isNumber(bsIndex) || bsIndex === 0 ) { 
        return state; 
      }
      const { boxShadows } = state
      , _index = bsIndex - 1;
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArrRemove(boxShadows, bsIndex)
      };
    }
    case UPDATE_CONFIG: {
      const { propName, value } = action
      if (!isStr(propName) 
       || !(isStr(value) || isBool(value)) ) { 
        return state; 
      }      
      const { configStyle } = state;
      return {
        ...state,
        configStyle: imObjUpdate(configStyle, propName, value)
      };
    }    
    default: {    
      const _neverActionType: never = actionType;      
      throw new Error('Unsupported action type: ' + _neverActionType);
    } 
  }
};

export default pageReducer
