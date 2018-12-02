import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/Loader';
import ScrollUpButton from 'components/interactions/ScrollUpButton';
import NextProject from 'components/Sections/NextProject';
import Footer from 'components/Footer';

import Header from './sections/Header';
import About from './sections/About';
import Illustration from './sections/Illustration';
import Logo from './sections/Logo';
import Colors from './sections/Colors';
import Screens from './sections/Screens';
import './index.styl';

class Booqed extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  render() {
    const {scrollTop} = this.props;
    return (
      <div className="booqed-page">
        <Loader colors={{light: '#3F9DD1', dark: '#F0F3F8'}} />
        <ScrollUpButton color="#F47883" percentagesScrolled={scrollTop} />
        <Header />
        <About />
        <Illustration />
        <Logo />
        <Colors />
        <Screens />
        <NextProject
          name="BETTERYET"
          desc="Loyalty programs for the local shoppers."
          href="/betteryet"
        />
        <Footer />
      </div>
    );
  }
}

export default Booqed;
