
import crId from '../../utils/crId'
import imArr from '../../utils/im-arr'
import imObj from '../../utils/im-obj'

const A = {
  SET_CURRENT_SHADOW: 'SET_CURRENT_SHADOW',
  UPATE_SHADOWS: 'UPDATE_SHADOWS',
  ADD_SHADOW: 'ADD_SHADOW',
  REMOVE_SHADOW: 'REMOVE_SHADOW',
  UPDATE_CONFIG: 'UPDATE_CONFIG'
};

const DF_INITIAL_VALUE = {
  isInset: false,
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75,
  id: crId()
}

const INITIAL_STATE = {
  currentIndex: 0,
  boxShadows: [ DF_INITIAL_VALUE ],
  configStyle: {
    bgColor: 'gray',
    boxColor: '#e7a61a',
    boxBorderRadius: '0px'
  }
};

const pageReducer = (state, action) => {
  switch(action.type){
    case A.SET_CURRENT_SHADOW: {
      const { editIndex } = action;
      return {
        ...state,
        currentIndex: editIndex        
      };
    }
    case A.UPDATE_SHADOWS: {
      const { boxShadow } = action
      , { boxShadows, currentIndex } = state;
      return {
        ...state,
        boxShadows: imArr.update(boxShadows, currentIndex, boxShadow)
      };
    }
    case A.ADD_SHADOW: {
      const { fromIndex } = action
      , { boxShadows, currentIndex } = state
      , _initValue = imObj.create(boxShadows[fromIndex])
      , _index = currentIndex + 1;
      _initValue.id = crId(_index)
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArr.insert(boxShadows, _index, _initValue)
      };
    }
    case A.REMOVE_SHADOW: {
      const { removeIndex } = action;
      if (removeIndex === 0) { return state; }
      const { boxShadows } = state
      , _index = removeIndex - 1;
      return {
        ...state,
        currentIndex: _index,
        boxShadows: imArr.remove(boxShadows, removeIndex)
      };
    }
    case A.UPDATE_CONFIG: {
      const { propName, value } = action
      , { configStyle } = state;
      return {
        ...state,
        configStyle: imObj.update(configStyle, propName, value)
      };
    }
    default: throw new Error('Unsupported action type: ' + action.type);
  }
};

pageReducer.A = A
pageReducer.INITIAL_STATE = INITIAL_STATE

export default pageReducer
