import React, {PureComponent} from 'react';

import Main from './sections/Main';
import About from './sections/About';
import Fonts from './sections/Fonts';
import Colors from './sections/Colors';
import Footer from './sections/Footer';

import './index.styl';

class SuperHero extends PureComponent {
  render() {
    return (
      <div className="superhero-page">
        <Main />
        <About />
        <Fonts />
        <Colors />
        <Footer />
      </div>
    );
  }
}

export default SuperHero;
