import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import ScrollUpButton from 'components/interactions/ScrollUpButton';
import NextProject from 'components/Sections/NextProject';
import Footer from 'components/Footer';
import provideScrollPosition from 'react-provide-scroll-position';

import Header from './sections/Header';
import About from './sections/About';
import Prototypes from './sections/Prototypes';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import AdditionalPrototype from './sections/AdditionalPrototype';

import Image1 from './images/image1.png';
import Image2 from './images/image2.png';
import Image3 from './images/image3.png';
import Image4 from './images/image4.png';
import Image5 from './images/image5.png';
import Image6 from './images/image6.png';

import './index.styl';

class CommuniHelpPage extends PureComponent {
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
      <div className="communihelp-page">
        <Loader colors={{light: '#F47883', dark: '#C2B1EA'}} />
        <ScrollUpButton color="#F47883" percentagesScrolled={scrollTop} />
        <Header />
        <About />
        {this.renderPrototypes(
          {src: Image1, offset: 20},
          {src: Image2, offset: 40},
          {src: Image3, offset: 20},
        )}
        <Logo />
        {this.renderPrototypes(
          {src: Image4, offset: 20},
          {src: Image5, offset: 40},
          {src: Image6, offset: 20},
        )}
        <Colors />
        <AdditionalPrototype src={Image6} offset={20} />
        <NextProject
          name="HUB"
          desc="Elevated coworking experience for the members of a shared  workplace."
          href="/hub"
        />
        <Footer />
      </div>
    );
  }
}

const CommuniHelpScroll = provideScrollPosition(CommuniHelpPage);

class CommuniHelp extends Component {
  render() {
    return <CommuniHelpScroll />;
  }
}

export default CommuniHelp;
