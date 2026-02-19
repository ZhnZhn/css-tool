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
    updateShadows,
    updateConfig,
    addShadow,
    setCurrentShadow,
    removeShadow
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
        {props.isBox ? <InputBox          
          configStyle={configStyle}
          onEnter={updateConfig}
        /> : null}
        {props.isShadow ? <InputShadow             
          id={_boxShadowCurrent.id}                
          initialValue={_boxShadowCurrent}
          onChange={updateShadows}
        />: null}
      </div>
      <div className={CL_VIEWS}>
        <ViewBoxShadow
           currentIndex={currentIndex}
           boxShadows={boxShadows}
           configStyle={configStyle}
           onAdd={addShadow}
           onEdit={setCurrentShadow}
           onRemove={removeShadow}
        />
      </div>
    </div>
  );
}

export default Page
