import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ClutchIcon} from './icons';

import './index.styl';

class Clutch extends PureComponent {
  static propTypes = {
    href: PropTypes.string
  };

  static defaultProps = {
    href: ''
  };

  render() {
    const {href} = this.props;

    return (
      <div className="clutch-section">
        <a href={href} className="clutch-link">
          See the review on Clutch
          <ClutchIcon />
        </a>
      </div>
    );
  }
}

export default Clutch;
