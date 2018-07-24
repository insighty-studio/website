import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-animate-on-scroll';

import 'animate.css/animate.min.css';
import './index.styl';

class OpacityAnimation extends PureComponent {
  static propTypes = {
    delay: PropTypes.number,
    animateIn: PropTypes.string,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    delay: 500,
    animateIn: 'fadeIn',
    animateOnce: true
  };

  render() {
    const {children, ...animationProps} = this.props;
    return (
      <ScrollAnimation {...animationProps}>
        {children}
      </ScrollAnimation>
    );
  }
}

export default OpacityAnimation;
