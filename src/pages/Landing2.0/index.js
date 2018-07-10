import React, {Component} from 'react';
import provideScrollPosition from 'react-provide-scroll-position';

import Main from './sections/Main';
import Services from './sections/Services';

const LandingPage = () => (
  <div className="landing-v2">
    <Main />
    <Services />
  </div>
);

const LandingScroll = provideScrollPosition(LandingPage);

class Landing extends Component {
  render() {
    return <LandingScroll />;
  }
}

export default Landing;
