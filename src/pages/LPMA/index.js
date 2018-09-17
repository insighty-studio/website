import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import ScrollUpButton from 'components/interactions/ScrollUpButton';
import NextProject from 'components/Sections/NextProject';
import Clutch from 'components/Sections/Clutch';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import {lpmaDarkGray, lpmaGreen} from 'styles/config';
import provideScrollPosition from 'react-provide-scroll-position';

import Header from './sections/Header';
import About from './sections/About';
import Illustrations from './sections/Illustrations';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import Screens from './sections/Screens';
import ContactUs from './sections/ContactUs';

import './index.styl';

class LPMAPage extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  render() {
    const {scrollTop} = this.props;
    return (
      <div className="lpma-page">
        <Loader colors={{light: lpmaGreen, dark: lpmaDarkGray}} />
        <ScrollUpButton color={lpmaGreen} percentagesScrolled={scrollTop} />
        <Header />
        <About />
        <Illustrations />
        <Logo />
        <Colors />
        <Screens />
        <Clutch href="https://clutch.co/profile/insighty#review-516735" />
        <NextProject
          name="BetterYet"
          desc="Loyalty programs for the local shoppers."
          href="/betteryet"
        />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

const LPMAScroll = provideScrollPosition(LPMAPage);

class LPMA extends Component {
  render() {
    return <LPMAScroll />;
  }
}

export default LPMA;
