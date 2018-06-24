import React, {Component} from 'react';

import NavigationBar from "components/NavigationBar";
import Footer from "components/Footer";

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './index.styl';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <NavigationBar />
        <Main />
        <Services />
        <TheProcess />
        <Work />
        <ContactUs />
        <Footer
          address="240 Richmond St W, Toronto, ON M5V 1V6"
          email="hello@insighty.studio"
        />
      </div>
    );
  }
}

export default Landing;
