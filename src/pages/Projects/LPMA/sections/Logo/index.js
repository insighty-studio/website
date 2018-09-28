import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import ProjectLogo from 'components/Sections/ProjectLogo';

import {LPMALogo} from './icons';
import LogoBg from './images/logo-bg.png';
import LogoBgWebp from './images/logo-bg.webp';
import './mobile/index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <ProjectLogo
        logo={<LPMALogo />}
        background={<Image alt="LPMA" src={LogoBg} webp={LogoBgWebp} className="lpma-logo-bg" />}
      />
    );
  }
}

export default Logo;
