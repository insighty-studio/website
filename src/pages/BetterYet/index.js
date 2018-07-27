import React, {PureComponent} from 'react';
import BodyBackground from 'components/BodyBackground';
import Loader from 'components/Loader';
import WhitePaper from 'components/Sections/WhitePaper';
import {betteryetBlue, betteryetOrangeYellow} from 'styles/config';
import Footer from 'components/Footer';

import Header from './sections/Header';
import About from './sections/About';
import BetterYetLogo from './sections/BetterYetLogo';
import Prototypes from './sections/Prototypes';
import Colors from './sections/Colors';
import ContactUs from './sections/ContactUs';
import ClientFooterSection from './sections/ClientFooter';
import Illustration from './sections/Illustration';
import './index.styl';

class BetterYet extends PureComponent {
  renderTopPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: require('./images/image1.png')},
          {src: require('./images/image2.png')},
          {src: require('./images/image3.png')},
        ]}
      />
    );
  }

  renderBottomPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: require('./images/image4.png')},
          {src: require('./images/image5.png')},
          {src: require('./images/image6.png')},
        ]}
      />
    );
  }

  render() {
    return (
      <div className="betteryet-page">
        <Loader colors={{light: betteryetOrangeYellow, dark: betteryetBlue}} />
        <BodyBackground color={betteryetBlue} />
        <Header />
        <About />
        {this.renderTopPrototypes()}
        <BetterYetLogo />
        {this.renderBottomPrototypes()}
        <Colors />
        <Illustration />
        <WhitePaper>
          <ContactUs />
          <ClientFooterSection />
        </WhitePaper>
        <Footer />
      </div>
    );
  }
}

export default BetterYet;
