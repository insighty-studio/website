import React, {Component} from 'react';

import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';
import Work from './sections/Work';
import ContactUs from './sections/ContactUs';

import './landing.styl';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <Main />
        <Services />
        <TheProcess />
        <Work />
        <ContactUs />
      </div>
    );
  }
}

export default Landing;
