import React, {Component} from 'react';
import classnames from 'classnames';

import './index.styl';

// TODO: change classname from button-new to button (don't forget about styl)
class Button extends Component {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('button', className)} {...rest}>{children}</button>
    );
  }
}

export default Button;
