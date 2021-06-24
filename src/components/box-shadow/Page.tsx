import type { FC } from '../types';
import type { ConfigStyleType, ShadowType } from './types';

import hooks from '../hooks';

import { A, INITIAL_STATE } from './pageConfig';
import pageReducer from './pageReducer';

import InputBox from './InputBox';
import InputShadow from './InputShadow';
import ViewBoxShadow from './ViewBoxShadow';

const { useReducer, useCallback } = hooks;

const CL_PAGE = "page-sb"
, CL_INPUTS = "page-sb__inputs"
, CL_VIEWS = "page-sb__views";

interface PageProps {
  isShadow: boolean; 
  isBox: boolean;
}

const Page: FC<PageProps, false> = ({ isShadow, isBox }) => {
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
  , _updateShadows = useCallback((boxShadow: ShadowType) => dispatch({
       type: A.UPDATE_SHADOWS, boxShadow
     }), [])
  , _updateConfig = useCallback((propName: keyof ConfigStyleType, value: any) => dispatch({
       type: A.UPDATE_CONFIG, propName, value
     }),[])
  , _addShadow = useCallback((fromIndex: number) => dispatch({
      type: A.ADD_SHADOW, fromIndex
    }),[])
  , _setCurrentShadow = useCallback((editIndex: number) => dispatch({
      type: A.SET_CURRENT_SHADOW, editIndex
    }),[])
  , _removeShadow = useCallback((removeIndex: number) => dispatch({
      type: A.REMOVE_SHADOW, removeIndex
    }),[])
  return (
    <div className={CL_PAGE} >
      <div className={CL_INPUTS}>
        <InputBox
          key="input-box"
          isBox={isBox}
          configStyle={configStyle}
          onEnter={_updateConfig}
        />
        <InputShadow
          key="input-shadow"
          id={id}
          isShadow={isShadow}
          isInset={isInset}
          initValue={_currentValue}
          onChange={_updateShadows}
        />
      </div>
      <div className={CL_VIEWS}>
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
