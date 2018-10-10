import classnames from 'classnames';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import './index.styl';
import './mobile.styl';

export class SectionHeading extends PureComponent {
  static propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string
  };

  static defaultProps = {
    subTitle: '',
    title: ''
  };

  render() {
    const {subTitle, title} = this.props;
    return (
      <div className="section-heading">
        <div className="sub-title">{subTitle}</div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export class Heading extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    priority: PropTypes.number,
  };

  static defaultProps = {
    children: null,
    className: '',
    priority: 1,
  };

  render() {
    const {className, children, priority} = this.props;
    const H = `h${priority}`;

    return (
      <H className={classnames('heading', className)}>{children}</H>
    );
  }
}

export class Paragraph extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, children} = this.props;

    return (
      <p className={classnames('paragraph', className)}>
        {children}
      </p>
    );
  }
}

export default SectionHeading;
