import type { FC, MouseEvent } from '../types'

import A from '../Comp';
import IconAppLogo from './IconAppLogo';
import AppLabel from './AppLabel';
import GitHubLink from './GitHubLink';

interface HeaderBarProps {
  onShadow: (evt: MouseEvent) => void;
  onBox: (evt: MouseEvent) => void;
}

const CAPTION = "CSS Tool v0.2.0";

const HeaderBar: FC<HeaderBarProps, false> = ({
   onShadow, 
   onBox 
}) => (
 <div className="header" >
    <IconAppLogo
       className="header__icon-app"
       title={CAPTION}
    />
    <div className="header__icon-gap" />
    <AppLabel
      className="header__label-app"
      caption={CAPTION}
    />
    <A.FlatButton
      caption="Box"
      title="Click to toggle css box inputs"
      accessKey="b"
      timeout={0}
      onClick={onBox}
    />
    <A.FlatButton
      caption="Shadow"
      title="Click to toggle css shadow-box inputs"
      accessKey="h"
      timeout={0}
      onClick={onShadow}
    />
    <GitHubLink
      className="header__github-link"
      title="GitHub Repository"
      href="https://github.com/zhnzhn/css-tool/"
   />
 </div>
);



export default HeaderBar
