import React, {PureComponent} from 'react';
import ProjectLogo from 'components/Sections/ProjectLogo';

import {LPMALogo} from './icons';
import LogoBg from './images/logo-bg.png';
import './index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <ProjectLogo
        logo={<LPMALogo />}
        background={<img alt="LPMA" src={LogoBg} className="lpma-logo-bg" />}
      />
    );
  }
}

export default Logo;
