import React, {Component} from 'react';
import Scroll from 'react-scroll';
import {ScrollToTopBtn} from 'imports/icons';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './landing.styl';

class Landing extends Component {
  renderScrollBtn() {
    return (
      <div className="scroll-btn" onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}>
        <ScrollToTopBtn />
      </div>
    );
  }

  render() {
    return (
      <div className="landing">
        {this.renderScrollBtn()}
        <Main />
        <Services />
        <TheProcess />
        <Work />
        <ContactUs />
      </div>
    );
  }
}

export default Landing;
