import React, {PureComponent} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

class Button extends PureComponent {
  render() {
    const {className, title} = this.props;
    return (
      <div className={classnames('button', className)}>
        {title}
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
