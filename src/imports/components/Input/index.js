import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
