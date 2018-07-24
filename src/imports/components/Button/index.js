import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {ExploreButtonIcon} from 'icons';

import './index.styl';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    href: PropTypes.string,
    to: PropTypes.string
  };

  static defaultProps = {
    className: '',
    title: '',
    disabled: false,
    children: null,
    href: '',
    to: ''
  };

  render() {
    const {className, title, disabled, children, href, to} = this.props;
    return (
      <button
        className={classnames('button', className)}
        disabled={disabled}
      >
        <div className={children && 'button-title'}>{title}</div>
        <div className="button-hover-text">{this.provideLink(href, to, title)}</div>
        <div className="button-icon">{children}</div>
      </button>
    );
  }

  provideLink(href, to, title) {
    if (href) {
      return <a target="_blank" href={href}>{title}</a>
    } else if (to) {
      return <Link to={to}><span className={to && 'fix'}>{title}</span></Link>
    } else {
      return <span>{title}</span>
    }
  }
}

export default Button;
