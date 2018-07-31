import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Parallax} from 'react-scroll-parallax';

import './index.styl';

class Prototypes extends PureComponent {
  static propTypes = {
    prototypes: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })).isRequired
  };

  renderPrototypes() {
    const {prototypes} = this.props;
    return prototypes.map(({src}, i) => (
      <div className={classnames('prototype', i > 0 && 'mobile-hidden')}>
        <img alt="" height="574" width="283" src={src} />
      </div>
    ));
  }

  render() {
    return (
      <Parallax
        offsetYMax={20}
        offsetYMin={-20}
      >
        <div className="prototypes-section">
          {this.renderPrototypes()}
        </div>
      </Parallax>
    );
  }
}

export default Prototypes;
