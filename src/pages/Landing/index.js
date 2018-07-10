import React, {Component} from 'react';
import ScrollToTopBtn from 'imports/components/ScrollToTopBtn';
import provideScrollPosition from 'react-provide-scroll-position';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from '../Landing2.0/sections/TheProcess';
import Work from '../Landing2.0/sections/Work';
import ContactUs from '../Landing2.0/sections/ContactUs';

import './index.styl';

const LandingPage = ({scrollTop}) => (
  <div className="landing-old">
    <ScrollToTopBtn percentagesScrolled={scrollTop} />
    <Main />
    <Services />
    <TheProcess />
    <Work />
    <ContactUs />
  </div>
);

const LandingScroll = provideScrollPosition(LandingPage);

class Landing extends Component {
  render() {
    return <LandingScroll />;
  }
}

export default Landing;
