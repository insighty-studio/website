import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Input extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  render() {
    const {className, ...rest} = this.props;
    return (
      <input className={classnames('input', className)} {...rest} />
    );
  }
}

export default Input;
