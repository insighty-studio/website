import React, {PureComponent} from 'react';
import Scroll from 'react-scroll';
import {ScrollToTopBtnIcon} from 'imports/icons';
import classnames from 'classnames';

import './styles/scroll-to-top-btn.styl';

class ScrollToTopBtn extends PureComponent {
  render() {
    return (
      <div
        className={classnames('scroll-btn', this.props.percentagesScrolled >= 920 && 'scroll-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}
      >
        <ScrollToTopBtnIcon />
      </div>
    );
  }
}

export default ScrollToTopBtn;
