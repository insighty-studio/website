import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class AdditionalPrototype extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired,
    offset: PropTypes.number.isRequired,
  };

  render() {
    const {src, offset} = this.props;
    return (
      <div className="additional-prototypes-section">
        <div key={src} className="prototype">
          <Parallax
            offsetYMax={offset}
            offsetYMin={-offset}
          >
            <img
              src={src}
              alt="CommuniHelp screenshot"
            />
          </Parallax>
        </div>
      </div>
    );
  }
}

export default AdditionalPrototype;
