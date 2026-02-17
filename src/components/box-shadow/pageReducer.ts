import type { ReducerType } from '../types';
import type { PageStateType, PageActionType } from './pageConfig';

import {
  isNumber,
  isStr
} from '../../utils/isTypeFn';

import crId from '../../utils/crId';
import {
  imArrInsert,
  imArrUpdate,
  imArrRemove 
} from '../../utils/im-arr';
import { imObjUpdate } from '../../utils/im-obj';

import {
  SET_CURRENT_SHADOW,
  UPDATE_SHADOWS,
  ADD_SHADOW,
  REMOVE_SHADOW,
  UPDATE_CONFIG
} from './pageConfig'

type PageReducer = ReducerType<PageStateType, PageActionType>


const pageReducer: PageReducer = (state, action) => {
  switch(action.type){
    case SET_CURRENT_SHADOW: {
      const { editIndex } = action;
      return isNumber(editIndex) ? {
        ...state,
        currentIndex: editIndex        
      } : state;
    }
    case UPDATE_SHADOWS: {
      const { pn, value } = action
      if (!isStr(pn)) { return state; }

      const { 
        boxShadows, 
        currentIndex 
      } = state
      , boxShadow = state.boxShadows[state.currentIndex]
      boxShadow[pn] = value
      return {
        ...state,
        boxShadows: imArrUpdate(boxShadows, currentIndex, boxShadow)
      };      
    }
    case ADD_SHADOW: {
      const { fromIndex } = action
      if (!isNumber(fromIndex)) { return state; }

      const { boxShadows, currentIndex } = state
      , _initValue = {...boxShadows[fromIndex]}
      , _index = currentIndex + 1;
      _initValue.id = crId(''+_index)
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArrInsert(boxShadows, _index, _initValue)
      };
    }
    case REMOVE_SHADOW: {
      const { removeIndex } = action;
      if (!isNumber(removeIndex) || removeIndex === 0 ) { 
        return state; 
      }
      
      const { boxShadows } = state
      , _index = removeIndex - 1;
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArrRemove(boxShadows, removeIndex)
      };
    }
    case UPDATE_CONFIG: {
      const { propName, value } = action
      if (!isStr(propName) || !isStr(value)) { 
        return state; 
      }

      const { configStyle } = state;
      return {
        ...state,
        configStyle: imObjUpdate(configStyle, propName, value)
      };
    }
    default: throw new Error('Unsupported action type: ' + action.type);
  }
};

export default pageReducer
