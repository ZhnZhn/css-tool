import { 
  useState, 
  useCallback 
} from '../uiApi';

type UseToggleType = {
  (initialValue?: boolean): [
    is: boolean,
    toggale: () => void
  ]
}

const useToggle: UseToggleType = (initialValue) => {
  const [is, setIs] = useState(() => !!initialValue)
  , toggle = useCallback(()=>setIs(v=>!v), [])
  return [is, toggle];
};

export default useToggle
