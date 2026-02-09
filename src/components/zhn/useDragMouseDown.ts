import type { MouseOrTouchEvent } from '../types';

import { useRef, getRefValue } from '../uiApi';
import useBool from "../hooks/useBool";

import { HAS_TOUCH_EVENTS  } from '../has';

const [
  EVENT_NAME_MOVE,
  EVENT_NAME_UP
]: [string, string] = HAS_TOUCH_EVENTS 
   ? ['touchmove', 'touchend']
   : ['mousemove', 'mouseup'];

const useDragMouseDown = (
  setValueFromPosition: (evt: MouseOrTouchEvent) => void
): [ boolean, (evt: MouseOrTouchEvent) => void ] => {
    const [isDragged, setDraggedTrue, setDraggedFalse] = useBool(false)
    , _refDragRunning = useRef(false)
    , _hDragMouseMove = (evt: MouseOrTouchEvent) => {    
      if (getRefValue(_refDragRunning)) {
        return;
      }
      _refDragRunning.current = true;
      requestAnimationFrame(() => {
        _refDragRunning.current = false;
        setValueFromPosition(evt)
      })
    }
    , _hDragMouseUp = () => {
       document.removeEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
       document.removeEventListener(EVENT_NAME_UP, _hDragMouseUp)
       setDraggedFalse()
    },
    _hMouseDown = (evt: MouseOrTouchEvent) => {
      // Cancel text selection
      if (!HAS_TOUCH_EVENTS) {
        evt.preventDefault()
      }      
      document.addEventListener(EVENT_NAME_MOVE, _hDragMouseMove)
      document.addEventListener(EVENT_NAME_UP, _hDragMouseUp)
      setDraggedTrue()
    };
    return [isDragged, _hMouseDown];
  };

  export default useDragMouseDown