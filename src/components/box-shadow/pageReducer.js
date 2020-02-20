
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
  gLength: 10,
  vLength: 10,
  blurR: 5,
  spreadR: 0,
  color: '#000000',
  opacity: 0.75,
  id: crId()
}

const INITIAL_STATE = {
  initValue: DF_INITIAL_VALUE,
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
      const { editIndex } = action
      , { boxShadows } = state
      return {
        ...state,
        currentIndex: editIndex,
        initValue: imObj.create(boxShadows[editIndex])
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
      , value = boxShadows[fromIndex]
      , initValue = imObj.create(value)
      , _index = currentIndex + 1;
      initValue.id = crId(_index)
      return {
        ...state, initValue,
        currentIndex: _index,
        boxShadows: imArr.insert(boxShadows, _index, initValue)
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
        initValue: imObj.create(boxShadows[_index]),
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
