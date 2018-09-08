import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import {Parallax} from 'react-scroll-parallax';
import LaptopsImage from './images/laptops.png';
import LaptopsImageWebp from './images/laptops.webp';
import LaptopMobile from './images/laptop-mobile.png';
import LaptopMobileWebp from './images/laptop-mobile.webp';

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
          <Image
            className="illustration-image"
            alt="LPMA"
            src={LaptopsImage}
            webp={LaptopsImageWebp}
          />
          <Image
            className="illustration-image-mobile"
            alt="LPMA"
            src={LaptopMobile}
            webp={LaptopMobileWebp}
          />
        </Parallax>
      </div>
    );
  }
}

export default Illustrations;
