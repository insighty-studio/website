import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import {AboutBackground, AboutLogo} from './icons';
import './index.styl';

class BetterYetLogo extends PureComponent {
  render() {
    return (
      <div className="betteryet-logo">
        <Parallax
          offsetYMax={80}
          offsetYMin={-40}
        >
          <AboutLogo />
        </Parallax>
        <div className="logo-bg">
          <AboutBackground />
        </div>
      </div>
    );
  }
}

export default BetterYetLogo;
