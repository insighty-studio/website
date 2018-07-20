import React, {PureComponent} from 'react';

import {LPMATitle, LPMAGraph} from 'icons';

import './index.styl';

class Main extends PureComponent {
  render() {
    return (
      <div className="main-section">
        <div className="lpma-graph">
          <LPMAGraph />
        </div>
        <div className="lpma-title">
          <LPMATitle />
        </div>
        <div className="laptop-image">
          <img alt="LPMA" src={require('./img/laptop.png')} />
        </div>
      </div>
    );
  }
}

export default Main;
