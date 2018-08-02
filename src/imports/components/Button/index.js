import React, {PureComponent, Fragment} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './index.styl';

class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'link']),
  };

  static defaultProps = {
    type: 'link',
    disabled: false,
    className: '',
    children: null,
    href: '',
    onClick: () => null,
  };

  renderContent() {
    const {
      title, children
    } = this.props;

    return (
      <Fragment>
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
      </Fragment>
    );
  }

  renderButton() {
    const {
      className, onClick, disabled
    } = this.props;

    return (
      <button
        type="submit"
        className={classnames('button', className)}
        onClick={onClick}
        disabled={disabled}
      >
        {this.renderContent()}
      </button>
    );
  }

  renderLink() {
    const {href, className} = this.props;

    return (
      <a
        href={href}
        className={classnames('button', className)}
      >
        {this.renderContent()}
      </a>
    );
  }

  render() {
    const {type} = this.props;

    if (type === 'link') {
      return this.renderLink();
    }

    return this.renderButton();
  }
}

export default Button;
