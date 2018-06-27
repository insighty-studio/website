import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

const Button = ({className, title, ...rest}) => {
  return (
    <div className={classnames('button', className)}>
      <button {...rest}>{title}</button>
    </div>
  );
};

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: '',
};

export default Button;
