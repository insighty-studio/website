import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from 'react-helmet';

class BodyBackground extends PureComponent {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: ''
  };

  render() {
    const {color} = this.props;

    return (
      <Helmet>
        <style>{`body { background-color: ${color}; }`}</style>
      </Helmet>
    );
  }
}

export default BodyBackground;
