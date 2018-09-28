import React, {Component} from 'react';
import classnames from 'classnames';

import './index.styl';

class Button extends Component {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('button', className)} {...rest}>{children}</button>
    );
  }
}

export default Button;
