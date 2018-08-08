import React, {PureComponent} from 'react';
import BodyBackground from 'components/BodyBackground';
import WhitePaper from 'components/Sections/WhitePaper';
import Loader from 'components/Loader';
import Footer from 'components/Footer';
import {lpmaDarkGray, lpmaGreen} from 'styles/config';

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

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Loader colors={{light: lpmaGreen, dark: lpmaDarkGray}} />
        <BodyBackground color={lpmaDarkGray} />
        <Header />
        <About />
        <Illustrations />
        <Logo />
        <Colors />
        <Screens />
        <WhitePaper>
          <ContactUs />
          <ClientFooterSection />
          <Footer />
        </WhitePaper>
        <Footer />
      </div>
    );
  }
}

export default LPMA;
