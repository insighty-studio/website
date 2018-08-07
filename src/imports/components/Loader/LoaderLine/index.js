import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './styles/web.styl';

class LoaderLine extends PureComponent {
  static propTypes = {
    loading: PropTypes.number
  };

  static defaultProps = {
    loading: 0
  };

  render() {
    const {loading} = this.props;
    return (
      <div className="loader-page">
        <div className="loader-line" style={{width: `${loading}%`}} />
      </div>
    );
  }
}

export default LoaderLine;
