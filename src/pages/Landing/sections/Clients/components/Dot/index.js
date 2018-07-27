import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
    const {className, onClick} = this.props;
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <div className={classnames('element', className)} onClick={onClick} />
    );
  }
}

export default Dot;
