import React, {PureComponent} from 'react';
import Loader from 'components/Loader';
import WhitePaper from 'components/Sections/WhitePaper';
import Footer from 'components/Footer';
import {betteryetBlue, betteryetOrangeYellow} from 'styles/config';

import Header from './sections/Header';
import About from './sections/About';
import Logo from './sections/Logo';
import Prototypes from './sections/Prototypes';
import Colors from './sections/Colors';
import ContactUs from './sections/ContactUs';
import ClientFooterSection from './sections/ClientFooter';
import Illustration from './sections/Illustration';
import Image1 from './images/image1.png';
import Image2 from './images/image2.png';
import Image3 from './images/image3.png';
import Image4 from './images/image4.png';
import Image5 from './images/image5.png';
import Image6 from './images/image6.png';

import './styles/web.styl';
import './styles/iphones.styl';

class BetterYet extends PureComponent {
  renderPrototypes(...rest) {
    return (
      <Prototypes
        prototypes={rest}
      />
    );
  }

  render() {
    return (
      <div className="betteryet-page">
        <Loader colors={{light: betteryetOrangeYellow, dark: betteryetBlue}} />
        <Header />
        <About />
        {this.renderPrototypes(
          {src: Image1, offset: 20},
          {src: Image2, offset: 40},
          {src: Image3, offset: 20}
        )}
        <Logo />
        {this.renderPrototypes(
          {src: Image4, offset: 20},
          {src: Image5, offset: 40},
          {src: Image6, offset: 20}
        )}
        <Colors />
        <Illustration />
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

export default BetterYet;
