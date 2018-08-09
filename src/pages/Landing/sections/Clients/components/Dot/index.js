import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Dot extends Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className} = this.props;
    return (
      <div className={classnames('element', className)} />
    );
  }
}

export default Dot;
