import React, {PureComponent} from 'react';
import BodyBackground from 'components/BodyBackground';
import Loader from 'components/Loader';
import {betteryetBlue, betteryetOrangeYellow} from 'styles/config';

import Header from './sections/Header';
import About from './sections/About';
import BetterYetLogo from './sections/BetterYetLogo';
import Prototypes from './sections/Prototypes';
import Colors from './sections/Colors';
import ContactUs from './sections/ContactUs';
import Footer from './sections/Footer';
import Illustration from './sections/Illustration';
import Image1 from './images/image1.png';
import Image2 from './images/image2.png';
import Image3 from './images/image3.png';
import Image4 from './images/image4.png';
import Image5 from './images/image5.png';
import Image6 from './images/image6.png';
import './index.styl';

class BetterYet extends PureComponent {
  renderTopPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: Image1},
          {src: Image2},
          {src: Image3},
        ]}
      />
    );
  }

  renderBottomPrototypes() {
    return (
      <Prototypes
        prototypes={[
          {src: Image4},
          {src: Image5},
          {src: Image6},
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
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default BetterYet;
