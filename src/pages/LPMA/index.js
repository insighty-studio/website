import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import BodyBackground from 'components/BodyBackground';
import WhitePaper from 'components/Sections/WhitePaper';
import ScrollUpButton from 'components/ScrollUpButton';
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
import ClientFooterSection from './sections/ClientFooter';
import './index.styl';
import './mobile/index.styl';

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
        <BodyBackground color={lpmaDarkGray} />
        <ScrollUpButton color={lpmaGreen} percentagesScrolled={scrollTop} />
        <Header />
        <About />
        <Illustrations />
        <Logo />
        <Colors />
        <Screens />
        <Clutch />
        <NextProject
          name="BetterYet"
          desc="Loyalty programs for the local shoppers"
          href="/betteryet"
        />
        <WhitePaper>
          <ContactUs />
          <ClientFooterSection />
          <Footer
            rights="© 2018 Insighty All Rights Reserved"
            email="hello@insighty.studio"
            address="240 Richmond St W, Toronto, ON M5V 1V6"
          />
        </WhitePaper>
        <Footer
          rights="© 2018 Insighty All Rights Reserved"
          email="hello@insighty.studio"
          address="240 Richmond St W, Toronto, ON M5V 1V6"
        />
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
