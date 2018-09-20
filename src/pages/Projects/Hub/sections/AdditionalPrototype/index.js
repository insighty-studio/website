import React, {PureComponent} from 'react';
import Image from 'react-image-webp';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class AdditionalPrototype extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    webp: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  };

  render() {
    const {src, webp, offset} = this.props;
    return (
      <div className="additional-prototypes-section">
        <div key={src} className="prototype">
          <Parallax
            offsetYMax={offset}
            offsetYMin={-offset}
          >
            <Image
              src={src}
              webp={webp}
            />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default AdditionalPrototype;
