import React, {Component} from 'react';

import './index.styl';
import './mobile/index.styl';

class Button extends Component {
  render() {
    const {children, ...rest} = this.props;
    return (
      <button type="button" className="button" {...rest}>{children}</button>
    );
  }
}

export default Button;
