import React, {PureComponent} from 'react';
import {NavLink} from 'react-router-dom';
import classnames from 'classnames';

import './index.styl';

export class Button extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('button', className)} {...rest}>{children}</button>
    );
  }
}

export class NavButton extends PureComponent {
  render() {
    const {
      children, className, to, ...rest
    } = this.props;
    return (
      <NavLink to={to} className={classnames('button', 'nav-button', className)} {...rest}>{children}</NavLink>
    );
  }
}

export class ButtonLink extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <button type="button" className={classnames('button-link', className)} {...rest}>{children}</button>
    );
  }
}

export class NavButtonLink extends PureComponent {
  render() {
    const {
      children, className, to, ...rest
    } = this.props;
    return (
      <NavLink to={to} className={classnames('button-link', 'nav-button-link', className)} {...rest}>
        {children}
      </NavLink>
    );
  }
}
