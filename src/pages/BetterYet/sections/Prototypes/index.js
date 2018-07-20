import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';

class Prototypes extends PureComponent {
  static propTypes = {
    prototypes: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired
  };

  static defaultProps = {
    prototypes: {},
  };

  renderPrototypes() {
    const {prototypes} = this.props;
    return prototypes.map(({src}) => (
      <div className="prototype">
        <img height="574" width="283" src={src} />
      </div>
    ))
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
