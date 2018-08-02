import React, {PureComponent} from 'react';
import {LPMATitle} from 'icons';

import Laptop from './img/laptop.png';
import {LPMAGraph} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <div className="lpma-graph">
          <LPMAGraph />
        </div>
        <div className="lpma-title">
          <LPMATitle />
        </div>
        <div className="laptop-image">
          <img alt="LPMA" src={Laptop} />
        </div>
      </div>
    );
  }
}

export default Header;
