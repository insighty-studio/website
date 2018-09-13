import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import ScrollUpButton from 'components/ScrollUpButton';
import NextProject from 'components/Sections/NextProject';
import Footer from 'components/Footer';
import {hubDarkBlue, hubGreen} from 'styles/config';
import provideScrollPosition from 'react-provide-scroll-position';

import Header from './sections/Header';
import About from './sections/About';
import Prototypes from './sections/Prototypes';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import ContactUs from './sections/ContactUs';

import Image1 from './images/image1.png';
import Image1Webp from './images/image1.webp';
import Image2 from './images/image2.png';
import Image2Webp from './images/image2.webp';
import Image3 from './images/image3.png';
import Image3Webp from './images/image3.webp';
import Image4 from './images/image4.png';
import Image4Webp from './images/image4.webp';
import Image5 from './images/image5.png';
import Image5Webp from './images/image5.webp';
import Image6 from './images/image6.png';
import Image6Webp from './images/image6.webp';

import './index.styl';


class HubPage extends PureComponent {
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
      <div className="hub-page">
        <Loader colors={{light: hubGreen, dark: hubDarkBlue}} />
        <ScrollUpButton color={hubGreen} percentagesScrolled={scrollTop} />
        <Header />
        <About />
        {this.renderPrototypes(
          {src: Image1, webp: Image1Webp, offset: 20},
          {src: Image2, webp: Image2Webp, offset: 40},
          {src: Image3, webp: Image3Webp, offset: 20},
        )}
        <Logo />
        {this.renderPrototypes(
          {src: Image4, webp: Image4Webp, offset: 20},
          {src: Image5, webp: Image5Webp, offset: 40},
          {src: Image6, webp: Image6Webp, offset: 20},
        )}
        <Colors />
        <NextProject
          name="LPMA"
          desc="Helping real estate principals achieve customer excellence."
          href="/lpma"
        />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

const HubScroll = provideScrollPosition(HubPage);

class Hub extends Component {
  render() {
    return <HubScroll />;
  }
}

export default Hub;
