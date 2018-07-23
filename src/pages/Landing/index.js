import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import provideScrollPosition from 'react-provide-scroll-position';
import ScrollUpButton from 'components/ScrollUpButton';
import Footer from 'components/Footer';

import 'styles/main.styl';
import './index.styl';

import Header from './sections/Header';
import Services from './sections/Services';
import Process from './sections/Process';
import ContactUs from './sections/ContactUs';

class LandingPage extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  render() {
    return (
      <div className="landing">
        <ScrollUpButton percentagesScrolled={this.props.scrollTop} />
        <Header />
        <Services />
        <Process />
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
