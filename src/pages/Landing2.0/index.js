import React, {Component} from 'react';
import provideScrollPosition from 'react-provide-scroll-position';

import Main from './sections/Main';
import Services from './sections/Services';

import './index.styl';

const LandingPage = () => (
  <div className="landing">
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
