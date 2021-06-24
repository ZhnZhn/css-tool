import type { FC, EmptyObjType } from './types';
import useToggle from './hooks/useToggle';

import HeaderBar from './header/HeaderBar';
import Page from './box-shadow/Page';

const AppBoxShadow: FC<EmptyObjType, false> = () => {
  const [isShadow, _toggleShadow] = useToggle(true)
  , [isBox, _toggleBox] = useToggle(false);

  return (
    <div>
      <HeaderBar
        onShadow={_toggleShadow}
        onBox={_toggleBox}
      />
      <Page
        isShadow={isShadow}
        isBox={isBox}
      />
    </div>
  )
};

export default AppBoxShadow
