import React, {PureComponent} from 'react';
import ProjectLogo from 'components/Sections/ProjectLogo';

import {AboutBackground, AboutLogo} from './icons';

class Logo extends PureComponent {
  render() {
    return (
      <ProjectLogo
        logo={<AboutLogo />}
        background={<AboutBackground />}
      />
    );
  }
}

export default Logo;
