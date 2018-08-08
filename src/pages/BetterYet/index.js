import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import ScrollUpButton from 'components/ScrollUpButton';
import WhitePaper from 'components/Sections/WhitePaper';
import NextProject from 'components/Sections/NextProject';
import Clutch from 'components/Sections/Clutch';
import Footer from 'components/Footer';
import {betteryetYellow, betteryetBlue, betteryetOrangeYellow} from 'styles/config';
import provideScrollPosition from 'react-provide-scroll-position';

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

import './index.styl';
import './mobile/index.styl';

class BetterYetPage extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  renderPrototypes(...rest) {
    return (
      <Prototypes
        prototypes={rest}
      />
    );
  }

  render() {
    const {scrollTop} = this.props;
    return (
      <div className="betteryet-page">
        <Loader colors={{light: betteryetOrangeYellow, dark: betteryetBlue}} />
        <ScrollUpButton color={betteryetYellow} percentagesScrolled={scrollTop} />
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
        <Clutch />
        <NextProject
          name="LPMA"
          desc="Helping real estate principals achieve customer excellence"
          href="/lpma"
        />
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

const BetterYetScroll = provideScrollPosition(BetterYetPage);

class BetterYet extends Component {
  render() {
    return <BetterYetScroll />;
  }
}

export default BetterYet;
