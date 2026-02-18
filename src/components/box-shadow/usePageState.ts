import type { 
  ConfigStyleType, 
  ShadowType 
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

type CreateUpdateByPropNameActionFn<T> = (propName: keyof T, value: unknown) => void
type CreateConfigActionFn = (bsIndex: number) => void
type Handlers = [
  CreateUpdateByPropNameActionFn<ShadowType>,
  CreateUpdateByPropNameActionFn<ConfigStyleType>,   
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
        (propName: keyof ShadowType, value: unknown) => dispatch({
          type: UPDATE_SHADOWS, 
          propName,
          value
        }),
        (propName: keyof ConfigStyleType, value: unknown) => dispatch({
          type: UPDATE_CONFIG, 
          propName, 
          value
        }),
        (bsIndex: number) => dispatch({
          type: ADD_SHADOW, 
          bsIndex
        }),
        (bsIndex: number) => dispatch({
          type: SET_CURRENT_SHADOW, 
          bsIndex
        }),
        (bsIndex: number) => dispatch({
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