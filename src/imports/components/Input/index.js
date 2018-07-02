import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './styles/input.styl';

class Input extends PureComponent {
  render() {
    const {className, ...rest} = this.props;
    return (
      <div className={classnames('form-input', className)}>
        <input {...rest} />
      </div>
    );
  }
}

Input.propTypes = {
  className: PropTypes.string,
};

Input.defaultProps = {
  className: '',
};

export default Input;
