import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ExploreButtonIcon} from 'icons';

import './index.styl';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    href: PropTypes.string
  };

  static defaultProps = {
    className: '',
    title: '',
    disabled: false,
    children: null,
    href: ''
  };

  render() {
    const {className, title, disabled, children, href} = this.props;
    return (
      <button
        className={classnames('button', className)}
        disabled={disabled}
      >
        <div className={children && 'button-title'}>{title}</div>
        <div className="button-hover-text">{this.provideLink(href, title)}</div>
        <div className="button-icon">{children}</div>
      </button>
    );
  }

  provideLink(href, title) {
    if (href) {
      return <a target="_blank" href={href}>{title}</a>
    } else {
      return <span>{title}</span>
    }
  }
}

export default Button;
