import React, {PureComponent, Component} from 'react';
import provideScrollPosition from 'react-provide-scroll-position';

import 'styles/main.styl';
import './index.styl';

import Header from './sections/Header';
import Services from './sections/Services';
import Process from './sections/Process';
import ContactUs from './sections/ContactUs';

class LandingPage extends PureComponent {
  render() {
    return (
			<div className="landing">
				<Header />
				<Services />
				<Process />
				<ContactUs />
			</div>
    );
  }
}

const LandingScroll = provideScrollPosition(LandingPage);

class Landing extends Component {
  render() {
    return <LandingScroll />;
  }
}

export default Landing;
