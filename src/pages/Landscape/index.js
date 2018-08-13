import React, {PureComponent} from 'react';

import {RotatePhoneIcon} from './icons/index';

import './mobile/index.styl';

class Landscape extends PureComponent {
  render() {
    return (
      <div className="landscape-screen">
        <div className="warning">
          <RotatePhoneIcon />
          <div className="warning-message">
            Please turn your device
          </div>
        </div>
      </div>
    );
  }
}

export default Landscape;
