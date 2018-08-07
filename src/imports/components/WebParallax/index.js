import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Parallax} from 'react-scroll-parallax';
import {isMobile} from 'react-device-detect';

class WebParallax extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    offsetYMin: PropTypes.number,
    offsetYMax: PropTypes.number,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    offsetYMin: 0,
    offsetYMax: 0,
    children: null,
  };

  render() {
    const {
      className, offsetYMax, offsetYMin, children
    } = this.props;

    if (!isMobile) {
      return (
        <Parallax
          className={className}
          offsetYMax={offsetYMax}
          offsetYMin={offsetYMin}
        >
          {children}
        </Parallax>
      );
    }

    return children;
  }
}

export default WebParallax;
