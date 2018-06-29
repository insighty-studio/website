import React, {Component} from 'react';
import Scroll from 'react-scroll';
import {ScrollToTopBtn} from 'imports/icons';
import classnames from 'classnames';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './landing.styl';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {percentagesScrolled: 0};
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const documentHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const windowHeight = window.innerHeight;
    const trackLength = documentHeight - windowHeight;
    const scrollToTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const percentagesScrolled = Math.floor(scrollToTop / trackLength * 100);
    this.setState({percentagesScrolled});
  }

  renderScrollBtn() {
    return (
      <div
        className={classnames('scroll-btn', this.state.percentagesScrolled >= 85 && 'scroll-btn-visible')}
        onClick={() => Scroll.animateScroll.scrollToTop({smooth: true, duration: 500})}>
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
