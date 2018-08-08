import React, {PureComponent} from 'react';

import {ClutchIcon} from './icons';

import './index.styl';

class Clutch extends PureComponent {
  render() {
    return (
      <div className="clutch-section">
        See the review on Clutch
        <ClutchIcon />
      </div>
    );
  }
}

export default Clutch;
