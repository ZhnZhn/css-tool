import { KeyboardEvent } from '../types';
import { useCallback } from '../uiApi';
 
type IsKeyEnterType = {
  (event: KeyboardEvent): boolean
}
type OnKeyEnterType = {
  (event: KeyboardEvent): void 
}
  
const _isKeyEnter: IsKeyEnterType = ({ keyCode }) => 
  keyCode === 13 || keyCode === 32;

const useKeyEnter = (
    onKeyEnter: OnKeyEnterType
) => useCallback((event: KeyboardEvent) => {
    if (_isKeyEnter(event)) {
      event.preventDefault()
      onKeyEnter(event)   
    }
}, [onKeyEnter]);

export default useKeyEnter