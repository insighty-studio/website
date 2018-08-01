import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {Parallax} from 'react-scroll-parallax';

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
    return prototypes.map(({src, offset}, i) => (
      <div className={classnames('prototype', i > 0 && 'mobile-hidden')}>
        <Parallax
          offsetYMax={offset}
          offsetYMin={-offset}
        >
          <img alt="" height="574" width="283" src={src} />
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
