import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Dot extends Component {
  static propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func
  };

  static defaultProps = {
    className: '',
    onClick: () => null
  };

  render() {
    return (
      <div className={classnames('element', this.props.className)} onClick={this.props.onClick} />
    );
  }
}

export default Dot;
