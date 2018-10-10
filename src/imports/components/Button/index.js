import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';

import './index.styl';

export class Button extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('btn', className)} {...rest}>
        <span>{children}</span>
      </button>
    );
  }
}

export class NavButton extends PureComponent {
  render() {
    const {
      children, className, to, ...rest
    } = this.props;
    return (
      <NavLink to={to} className={classnames('btn', 'nav-button', className)} {...rest}>
        <span>{children}</span>
      </NavLink>
    );
  }
}

export class ButtonLink extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('btn-link', className)} {...rest}>
        <span>{children}</span>
      </button>
    );
  }
}

export class NavButtonLink extends PureComponent {
  render() {
    const {
      children, className, to, ...rest
    } = this.props;
    return (
      <NavLink to={to} className={classnames('btn-link', 'nav-button-link', className)} {...rest}>
        <span>{children}</span>
      </NavLink>
    );
  }
}
