import type {   
  UpdateShadowFn,
  UpdateConfigStyleFn 
} from './types';

import { 
  useReducer, 
  useMemo
} from '../uiApi';
  
import { 
  UPDATE_SHADOWS,
  UPDATE_CONFIG, 
  ADD_SHADOW,
  SET_CURRENT_SHADOW,
  REMOVE_SHADOW,
  INITIAL_STATE, 
  PageStateType
} from './pageConfig';
import pageReducer from './pageReducer';

type CreateConfigActionFn = (bsIndex: number) => void
type Handlers = [  
  UpdateShadowFn,
  UpdateConfigStyleFn,  
  CreateConfigActionFn,
  CreateConfigActionFn,
  CreateConfigActionFn  
]

type UsePageStateType = [
  PageStateType,
  ...Handlers    
]

const usePageState = (): UsePageStateType => {
    const [
        state, 
        dispatch
    ] = useReducer(pageReducer, INITIAL_STATE)
    , _handlers: Handlers = useMemo(() => [
        (propName, value) => dispatch({
          type: UPDATE_SHADOWS, 
          propName,
          value
        }),
        (propName, value) => dispatch({
          type: UPDATE_CONFIG, 
          propName, 
          value
        }),
        (bsIndex) => dispatch({
          type: ADD_SHADOW, 
          bsIndex
        }),
        (bsIndex) => dispatch({
          type: SET_CURRENT_SHADOW, 
          bsIndex
        }),
        (bsIndex) => dispatch({
          type: REMOVE_SHADOW, 
          bsIndex
        })
     ], []);
    return [
        state,
        ..._handlers
    ];
};

export default usePageState