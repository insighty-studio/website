import React, {PureComponent} from 'react';

import {BetterYetLogo} from "imports/icons";

import './index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <div className="by-logo">
        <BetterYetLogo />
      </div>
    );
  }
}

export default Logo;