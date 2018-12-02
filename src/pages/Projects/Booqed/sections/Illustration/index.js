import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';

import BooqedLaptopsImage from './images/booqed-laptops.png';

import './index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <Parallax
          className="illustrations-parallax"
          offsetYMax={60}
          offsetYMin={-60}
        >
          <img
            className="illustration-image"
            alt="Booqed laptops"
            src={BooqedLaptopsImage}
          />
        </Parallax>
      </div>
    );
  }
}

export default Illustrations;
