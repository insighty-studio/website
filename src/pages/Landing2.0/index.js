import React, {PureComponent, Component} from 'react';
import provideScrollPosition from 'react-provide-scroll-position';

import './index.styl';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

class LandingPage extends PureComponent {
  render() {
    return (
			<div className="landing">
				<Main />
				<Services />
				<TheProcess />
				<Work />
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
