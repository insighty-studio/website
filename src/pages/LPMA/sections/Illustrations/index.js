import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import LeftMac from './img/left-mac.png';
import RightMac from './img/right-mac.png';

import './index.styl';
import './mobile/index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <Parallax
          className="mac-parallax"
          offsetYMax={5}
          offsetYMin={-5}
        >
          <img className="left-mac" alt="Left Mac" src={LeftMac} />
        </Parallax>
        <Parallax
          className="mac-parallax"
          offsetYMax={5}
          offsetYMin={-5}
          slowerScrollRate
        >
          <img className="right-mac" alt="Right Mac" src={RightMac} />
        </Parallax>
      </div>
    );
  }
}

export default Illustrations;
