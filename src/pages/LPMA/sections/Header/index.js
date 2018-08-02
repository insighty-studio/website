import React, {PureComponent} from 'react';
import {LPMATitle} from 'icons';
import {Parallax} from 'react-scroll-parallax';

import Laptop from './img/laptop.png';
import {LPMAGraph} from './icons';
import './index.styl';

class Header extends PureComponent {
  render() {
    return (
      <div className="header-section">
        <div className="lpma-graph">
          <Parallax
            offsetYMax={40}
            offsetYMin={-40}
          >
            <LPMAGraph />
          </Parallax>
        </div>
        <div className="lpma-title">
          <Parallax
            offsetYMax={20}
            offsetYMin={-20}
          >
            <LPMATitle />
          </Parallax>
        </div>
        <div className="laptop-image">
          <Parallax
            offsetYMax={60}
            offsetYMin={-60}
          >
            <img alt="LPMA" src={Laptop} />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default Header;
