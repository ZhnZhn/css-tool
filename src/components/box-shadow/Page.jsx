import React, { useReducer, useCallback } from 'react'

import pageReducer from './pageReducer'


import InputBox from './InputBox'
import InputShadow from './InputShadow'
import ViewBoxShadow from './ViewBoxShadow'

const CL = {
  PAGE: "page-sb",
  INPUTS: "page-sb__inputs",
  VIEWS: "page-sb__views"
};

const { A, INITIAL_STATE } = pageReducer;

const Page = ({isShadow, isBox}) => {
  const [
    state, dispatch
  ] = useReducer(pageReducer, INITIAL_STATE)
  , {
      currentIndex,
      boxShadows,
      configStyle
    } = state
  , _currentValue = boxShadows[currentIndex]  
  , { id, isInset } = _currentValue
  , _updateShadows = useCallback(boxShadow => dispatch({
       type: A.UPDATE_SHADOWS, boxShadow
     }), [])
  , _updateConfig = useCallback((propName, value) => dispatch({
       type: A.UPDATE_CONFIG, propName, value
     }),[])
  , _addShadow = useCallback(fromIndex => dispatch({
      type: A.ADD_SHADOW, fromIndex
    }),[])
  , _setCurrentShadow = useCallback(editIndex => dispatch({
      type: A.SET_CURRENT_SHADOW, editIndex
    }),[])
  , _removeShadow = useCallback(removeIndex => dispatch({
      type: A.REMOVE_SHADOW, removeIndex
    }),[])
  return (
    <div className={CL.PAGE} >
      <div className={CL.INPUTS}>
        <InputBox
          isBox={isBox}
          configStyle={configStyle}
          onEnter={_updateConfig}
        />
        <InputShadow
          id={id}
          isShadow={isShadow}
          isInset={isInset}
          initValue={_currentValue}
          onChange={_updateShadows}
        />
      </div>
      <div className={CL.VIEWS}>
        <ViewBoxShadow
           currentIndex={currentIndex}
           boxShadows={boxShadows}
           configStyle={configStyle}
           onAdd={_addShadow}
           onEdit={_setCurrentShadow}
           onRemove={_removeShadow}
        />
      </div>
    </div>
  );
}

export default Page
