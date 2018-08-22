import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {ClutchIcon} from './icons';

import './index.styl';

class Clutch extends PureComponent {
  static propTypes = {
    link: PropTypes.string.isRequired,
  }

  render() {
    const {link} = this.props;
    return (
      <div className="clutch-section">
        <a
          href={link}
          rel="noopener noreferrer"
          target="_blank"
        >
          See the review on Clutch
          <ClutchIcon />
        </a>
      </div>
    );
  }
}

export default Clutch;
