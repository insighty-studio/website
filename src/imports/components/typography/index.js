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
        <div className="sub-title">
          {subTitle}
        </div>
        <div className="title">
          {title}
        </div>
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
    children: PropTypes.string.isRequired,
    animated: PropTypes.bool
  };

  static defaultProps = {
    animated: false
  };

  render() {
    const {children, animated} = this.props;
    return (
      <p
        className="paragraph"
        data-aos={animated && 'fade-up'}
        data-aos-easing={animated && 'ease-out-sine'}
        data-aos-delay={animated && '250'}
      >
        {children}
      </p>
    );
  }
}

export default SectionHeading;
