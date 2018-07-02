import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles/button.styl';

class Button extends PureComponent {
  render() {
    const {className, title, ...rest} = this.props;
    return (
      <div className={classnames('button', className)}>
        <button {...rest}>{title}</button>
      </div>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
