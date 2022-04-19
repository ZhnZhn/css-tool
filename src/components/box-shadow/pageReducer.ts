import type { ReducerType } from '../types';
import type { PageStateType, PageActionType } from './pageConfig';

import crId from '../../utils/crId';
import imArr from '../../utils/im-arr';
import imObj from '../../utils/im-obj';

import {
  SET_CURRENT_SHADOW,
  UPDATE_SHADOWS,
  ADD_SHADOW,
  REMOVE_SHADOW,
  UPDATE_CONFIG
} from './pageConfig'

type PageReducer = ReducerType<PageStateType, PageActionType>

const _isNumber = (n: any): n is number => typeof n === 'number'; 
const _isStr = (str: any): str is string => typeof str === 'string'; 

const pageReducer: PageReducer = (state, action) => {
  switch(action.type){
    case SET_CURRENT_SHADOW: {
      const { editIndex } = action;
      return _isNumber(editIndex) ? {
        ...state,
        currentIndex: editIndex        
      } : state;
    }
    case UPDATE_SHADOWS: {
      const { boxShadow } = action
      if (!boxShadow) { return state; }

      const { boxShadows, currentIndex } = state;
      return {
        ...state,
        boxShadows: imArr.update(boxShadows, currentIndex, boxShadow)
      };
    }
    case ADD_SHADOW: {
      const { fromIndex } = action
      if (!_isNumber(fromIndex)) { return state; }

      const { boxShadows, currentIndex } = state
      , _initValue = imObj.create(boxShadows[fromIndex])
      , _index = currentIndex + 1;
      _initValue.id = crId(''+_index)
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArr.insert(boxShadows, _index, _initValue)
      };
    }
    case REMOVE_SHADOW: {
      const { removeIndex } = action;
      if (!_isNumber(removeIndex) || removeIndex === 0 ) { 
        return state; 
      }
      
      const { boxShadows } = state
      , _index = removeIndex - 1;
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArr.remove(boxShadows, removeIndex)
      };
    }
    case UPDATE_CONFIG: {
      const { propName, value } = action
      if (!_isStr(propName)) { return state; }

      const { configStyle } = state;
      return {
        ...state,
        configStyle: imObj.update(configStyle, propName, value)
      };
    }
    default: throw new Error('Unsupported action type: ' + action.type);
  }
};

export default pageReducer
