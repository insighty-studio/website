import React, {PureComponent} from 'react';

import {Parallax} from 'react-scroll-parallax';

import BooqedIllustrationImage from './images/booqed-illustration.png';
import './index.styl';
import './mobile/index.styl';

class Logo extends PureComponent {
  render() {
    return (
      <div className="illustration-section">
        <Parallax
          className="illustrations-parallax"
          offsetYMax={60}
          offsetYMin={-60}
        >
          <img
            className="illustration-image"
            alt="booqed illustration"
            src={BooqedIllustrationImage}
          />
        </Parallax>
      </div>
    );
  }
}

export default Logo;
