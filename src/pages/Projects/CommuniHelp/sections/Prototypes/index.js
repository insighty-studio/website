import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';
import './mobile/index.styl';

class Prototypes extends PureComponent {
  static propTypes = {
    prototypes: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      offset: PropTypes.number,
    })).isRequired
  };

  renderPrototypes() {
    const {prototypes} = this.props;
    return prototypes.map(({src, offset}) => (
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
    ));
  }

  render() {
    return (
      <div className="prototypes-section">
        {this.renderPrototypes()}
      </div>
    );
  }
}

export default Prototypes;
