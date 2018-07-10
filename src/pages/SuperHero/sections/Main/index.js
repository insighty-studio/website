import React, {PureComponent} from 'react';
import {Lightning} from 'imports/icons';

import './index.styl';

class Main extends PureComponent {
  render() {
    return (
      <div className="main-section">
        <img alt='Main' src={require('./img/main-illustration.png')} />
        <Lightning />
      </div>
    );
  }
}

export default Main;
