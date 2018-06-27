import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.min.css';

class OpacityAnimation extends Component {
  render() {
    const {children, ...animationProps} = this.props;
    return (
      <ScrollAnimation {...animationProps}>
        {children}
      </ScrollAnimation>
    );
  }
}

OpacityAnimation.defaultProps = {
  delay: 500,
  animateIn: 'fadeIn',
  animateOnce: true
};

OpacityAnimation.propTypes = {
  delay: PropTypes.number,
  animateIn: PropTypes.string
};

export default OpacityAnimation;
