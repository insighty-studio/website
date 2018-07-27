import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {InsightyLogo} from 'icons';

import './index.styl';

class Loader extends PureComponent {
  static propTypes = {
    colors: PropTypes.shape({
      light: PropTypes.string,
      dark: PropTypes.string
    })
  };

  static defaultProps = {
    colors: {}
  };

  render() {
    const {colors: {light, dark}} = this.props;

    return (
      <div className="loader-page">
        <div className="loader">
          <InsightyLogo />
          <div className="light-shade" style={{backgroundColor: light}} />
          <div className="dark-shade" style={{backgroundColor: dark}} />
        </div>
      </div>
    );
  }
}

export default Loader;
