import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Input extends Component {
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
