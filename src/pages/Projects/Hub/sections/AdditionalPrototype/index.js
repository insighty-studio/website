import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class AdditionalPrototype extends PureComponent {
  static propTypes = {
    desktopSrc: PropTypes.string.isRequired,
    mobileSrc: PropTypes.string.isRequired,
    mobileWebp: PropTypes.string.isRequired,
    desktopWebp: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  };

  render() {
    const {
      mobileSrc, desktopSrc, mobileWebp, desktopWebp, offset
    } = this.props;
    return (
      <div className="additional-prototypes-section">
        <div key={mobileSrc} className="mobile-prototype">
          <Parallax
            offsetYMax={offset}
            offsetYMin={-offset}
          >
            <Image
              src={mobileSrc}
              webp={mobileWebp}
            />
          </Parallax>
        </div>
        <div key={desktopSrc} className="desktop-prototype">
          <Parallax
            offsetYMax={offset}
            offsetYMin={-offset}
          >
            <Image
              src={desktopSrc}
              webp={desktopWebp}
            />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default AdditionalPrototype;
