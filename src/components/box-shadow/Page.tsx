import usePageState from './usePageState';

import InputBox from './InputBox';
import InputShadow from './InputShadow';
import ViewBoxShadow from './ViewBoxShadow';

const CL_PAGE = "page-sb"
, CL_INPUTS = "page-sb__inputs"
, CL_VIEWS = "page-sb__views";

interface PageProps {
  isShadow: boolean; 
  isBox: boolean;
}

const Page = ({ 
  isShadow, 
  isBox 
}: PageProps) => {
  const [
    state,
    _updateShadows,
    _updateConfig,
    _addShadow,
    _setCurrentShadow,
    _removeShadow
  ] = usePageState()  
  , {
      currentIndex,
      boxShadows,
      configStyle
    } = state
  , _currentValue = boxShadows[currentIndex]
  , { 
    id, 
    isInset 
  } = _currentValue;
  
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
