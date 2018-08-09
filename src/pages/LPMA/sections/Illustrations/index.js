import React, {PureComponent} from 'react';
import {Parallax} from 'react-scroll-parallax';
import LaptopsImage from './img/laptops.png';
import LaptopMobile from './img/laptop-mobile.png';

import './index.styl';
import './mobile/index.styl';

class Illustrations extends PureComponent {
  render() {
    return (
      <div className="illustrations-section">
        <Parallax
          className="illustrations-parallax"
          offsetYMax={60}
          offsetYMin={-60}
        >
          <img className="illustration-image" alt="LPMA" src={LaptopsImage} />
          <img className="illustration-image-mobile" alt="LPMA" src={LaptopMobile} />
        </Parallax>
      </div>
    );
  }
}

export default Illustrations;
