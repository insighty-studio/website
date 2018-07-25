import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {InsightyLogo} from 'icons';

import './index.styl';

class LoaderLine extends PureComponent {
  static propTypes = {
    loading: PropTypes.number
  };

  static defaultProps = {
    loading: 0
  };

  render() {
    return (
      <div className="loader-page">
        <div className="loader-line" style={{width: `${this.props.loading}%`}} />
      </div>
    );
  }
}

export default LoaderLine;
