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

type Handlers = [
  (boxShadow: ShadowType) => void,
  (propName: keyof ConfigStyleType, value: any) => void,
  (fromIndex: number) => void,
  (editIndex: number) => void, 
  (removeIndex: number) => void
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
        (boxShadow: ShadowType) => dispatch({
          type: UPDATE_SHADOWS, 
          boxShadow
        }),
        (propName: keyof ConfigStyleType, value: any) => dispatch({
          type: UPDATE_CONFIG, 
          propName, 
          value
        }),
        (fromIndex: number) => dispatch({
          type: ADD_SHADOW, 
          fromIndex
        }),
        (editIndex: number) => dispatch({
          type: SET_CURRENT_SHADOW, 
          editIndex
        }),
        (removeIndex: number) => dispatch({
          type: REMOVE_SHADOW, 
          removeIndex
        })
     ], []);
    return [
        state,
        ..._handlers
    ];
};

export default usePageState