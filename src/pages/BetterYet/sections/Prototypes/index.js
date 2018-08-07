import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import WebParallax from 'components/WebParallax';

import './index.styl';

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
        <WebParallax
          offsetYMax={offset}
          offsetYMin={-offset}
        >
          <img alt="" src={src} />
        </WebParallax>
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
