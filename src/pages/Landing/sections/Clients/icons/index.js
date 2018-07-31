/* eslint-disable */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export class LeftBlackArrow extends PureComponent {
  render() {
    return (
      <svg className="left-black-arrow left" width="16px" height="26px" viewBox="0 0 16 26">
        <polyline stroke="#202020" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(8.000000, 13.000000) scale(-1, 1) translate(-8.000000, -13.000000) " points="1 1 15 12.994 1 25" />
      </svg>
    );
  }
}

export class LeftColorArrow extends PureComponent {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: ''
  };
  render() {
    const {color} = this.props;

    return (
      <svg className="left-yellow-arrow left" width="16px" height="26px" viewBox="0 0 16 26">
        <polyline stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(8.000000, 13.000000) scale(-1, 1) translate(-8.000000, -13.000000) " points="1 1 15 12.994 1 25" />
      </svg>
    );
  }
}

export class RightBlackArrow extends PureComponent {
  render() {
    return (
      <svg className="right-black-arrow right" width="16px" height="26px" viewBox="0 0 16 26">
        <polyline stroke="#202020" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" points="1 1 15 12.994 1 25" />
      </svg>
    );
  }
}

export class RightColorArrow extends PureComponent {
  static propTypes = {
    color: PropTypes.string
  };

  static defaultProps = {
    color: ''
  };

  render() {
    const {color} = this.props;

    return (
      <svg className="right-yellow-arrow right" width="16px" height="26px" viewBox="0 0 16 26">
        <polyline stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" points="1 1 15 12.994 1 25" />
      </svg>
    );
  }
}
