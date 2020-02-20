import React, { useReducer, useCallback } from 'react'

import pageReducer from './pageReducer'

import InputBoxShadow from './InputBoxShadow'
import ViewBoxShadow from './ViewBoxShadow'

const CL = "page-sb";

const { A, INITIAL_STATE } = pageReducer;

const Page = ({isShadow, isBox}) => {
  const [
    state, dispatch
  ] = useReducer(pageReducer, INITIAL_STATE)
  , {
      currentIndex,
      initValue,
      boxShadows,
      configStyle
    } = state
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
    <div className={CL} >
      <InputBoxShadow
         isShadow={isShadow}
         isBox={isBox}
         initValue={initValue}
         configStyle={configStyle}
         onChange={_updateShadows}
         onEnter={_updateConfig}
      />
      <ViewBoxShadow
         currentIndex={currentIndex}
         boxShadows={boxShadows}
         configStyle={configStyle}
         onAdd={_addShadow}
         onEdit={_setCurrentShadow}
         onRemove={_removeShadow}
      />
    </div>
  );
}

export default Page
