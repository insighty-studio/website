/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    href: PropTypes.string
  };

  static defaultProps = {
    className: '',
    disabled: false,
    children: null,
    href: ''
  };

  provideLink(href, title) {
    if (href) {
      return (
        <a target="_blank" rel="noopener noreferrer" href={href}>
          {title}
        </a>
      );
    }
    return (
      <span>
        {title}
      </span>
    );
  }

  render() {
    const {
      className, title, disabled, children, href
    } = this.props;
    return (
      <button
        className={classnames('button', className)}
        disabled={disabled}
      >
        <div className={children && 'button-title'}>
          {title}
        </div>
        <div className="button-hover-text">
          {this.provideLink(href, title)}
        </div>
        <div className="button-icon">
          {children}
        </div>
      </button>
    );
  }
}

export default Button;
