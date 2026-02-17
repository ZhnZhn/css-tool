import usePageState from './usePageState';

import InputBox from './InputBox';
import InputShadow from './InputShadow';
import ViewBoxShadow from './ViewBoxShadow';

const CL_PAGE = "page-sb"
, CL_INPUTS = `${CL_PAGE}__inputs`
, CL_VIEWS = `${CL_PAGE}__views`;

interface PageProps {
  isShadow: boolean; 
  isBox: boolean;
}

const Page = (props: PageProps) => {
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
  , _boxShadowCurrent = boxShadows[currentIndex];    
  return (
    <div className={CL_PAGE} >
      <div className={CL_INPUTS}>
        <InputBox
          key="input-box"
          isBox={props.isBox}
          configStyle={configStyle}
          onEnter={_updateConfig}
        />
        {props.isShadow ? <InputShadow             
          id={_boxShadowCurrent.id}                
          initialValue={_boxShadowCurrent}
          onChange={_updateShadows}
        />: null}
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
