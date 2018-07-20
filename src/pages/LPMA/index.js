import React, {PureComponent} from 'react';

import Header from './sections/Header';
import About from './sections/About';
import Font from './sections/Font';
import Illustrations from './sections/Illustrations';
import Colors from './sections/Colors';
import Screens from './sections/Screens';
import ContactUs from "./sections/ContactUs";
import Footer from "./sections/Footer";

import './index.styl';

class LPMA extends PureComponent {
  render() {
    return (
      <div className="lpma-page">
        <Header />
        <About />
        <Font />
        <Illustrations />
        <Colors />
        <Screens />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default LPMA;
