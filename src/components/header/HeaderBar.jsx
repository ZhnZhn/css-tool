import React from 'react'

import IconAppLogo from './IconAppLogo'
import AppLabel from './AppLabel'
import GitHubLink from './GitHubLink'

const CAPTION = "CSS Tool v0.1.0";

const HeaderBar = () => (
 <div className="header" >
    <IconAppLogo
       className="header__icon-app"
       title={CAPTION}
    />
    <AppLabel
       className="header__label-app"
       caption={CAPTION}
    />
    <GitHubLink
      className="header__github-link"
      title="GitHub Repository"
      href="https://github.com/zhnzhn/css-tool/"
   />
 </div>
);



export default HeaderBar
