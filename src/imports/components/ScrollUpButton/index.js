import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';
import {ScrollUpBtnIcon} from 'icons';
import classnames from 'classnames';

import './index.styl';

class ScrollUpButton extends PureComponent {
  static propTypes = {
    percentagesScrolled: PropTypes.number
  };

  static defaultProps = {
    percentagesScrolled: 0
  };

  constructor(props) {
    super(props);
    this.state = {
      windowHeight: 0
    };
  }

  componentDidMount() {
    const windowHeight = window.innerHeight;
    this.setState({windowHeight});
  }

  render() {
    return (
      <div
        className={classnames('scroll-up-btn',
          this.props.percentagesScrolled >= this.state.windowHeight && 'scroll-up-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}
      >
        <ScrollUpBtnIcon />
      </div>
    );
  }
}

export default ScrollUpButton;
