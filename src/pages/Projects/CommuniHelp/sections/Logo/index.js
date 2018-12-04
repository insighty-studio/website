import React, {PureComponent} from 'react';
import ProjectLogo from 'components/Sections/ProjectLogo';

import {AboutLogo} from './icons';

import './index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <ProjectLogo
        logo={<AboutLogo />}
      />
    );
  }
}

export default Logo;
