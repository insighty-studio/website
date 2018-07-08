import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles/button.styl';

class Button extends PureComponent {
  render() {
    const {className, title, disabled, ...rest} = this.props;
    return (
      <div className={classnames('button', disabled && 'disabled', className)}>
        <button
          disabled={disabled}
          {...rest}
        >
          {title}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  title: '',
  disabled: false,
};

export default Button;
