import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    href: PropTypes.string
  };

  static defaultProps = {
    className: '',
    children: null,
    href: ''
  };

  render() {
    const {
      className, title, children, href
    } = this.props;
    return (
      // eslint-disable-next-line react/button-has-type
      <a
        className={classnames('button', className)}
        href={href}
      >
        <div className={children && 'button-title'}>
          {title}
        </div>
        <div className="button-hover-text">
          <span>
            {title}
          </span>
        </div>
        <div className="button-icon">
          {children}
        </div>
      </a>
    );
  }
}

export default Button;
