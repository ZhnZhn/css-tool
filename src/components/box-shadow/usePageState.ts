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
  (propName: keyof ShadowType, value: unknown) => void,
  (propName: keyof ConfigStyleType, value: unknown) => void,
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
        (pn: keyof ShadowType, value: unknown) => dispatch({
          type: UPDATE_SHADOWS, 
          pn,
          value
        }),
        (propName: keyof ConfigStyleType, value: unknown) => dispatch({
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