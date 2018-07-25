import React, {PureComponent} from 'react';
import {AboutBackground, AboutLogo} from './icons';
import './index.styl';

class BetterYetLogo extends PureComponent {
  render() {
    return (
      <div className="betteryet-logo">
        <AboutLogo />
        <div className="logo-bg">
          <AboutBackground />
        </div>
      </div>
    );
  }
}

export default BetterYetLogo;
