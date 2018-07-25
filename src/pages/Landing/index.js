import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import provideScrollPosition from 'react-provide-scroll-position';
import ScrollUpButton from 'components/ScrollUpButton';
import Footer from 'components/Footer';

import Header from './sections/Header';
import Services from './sections/Services';
import Process from './sections/Process';
import Clients from './sections/Clients';
import ContactUs from './sections/ContactUs';
import './index.styl';

class LandingPage extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  render() {
    const {scrollTop} = this.props;
    return (
      <div className="landing">
        <ScrollUpButton percentagesScrolled={scrollTop} />
        <Header />
        <Services />
        <Process />
        <Clients />
        <ContactUs />
        <Footer />
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
