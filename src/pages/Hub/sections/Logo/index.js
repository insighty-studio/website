import React, {PureComponent} from 'react';
import ProjectLogo from 'components/Sections/ProjectLogo';

import {Background, BackgroundMobile, AboutLogo} from './icons';

import './mobile/index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <ProjectLogo
        logo={<AboutLogo />}
        background={[<Background />, <BackgroundMobile />]}
      />
    );
  }
}

export default Logo;
