import React, {Component} from 'react';

import NavigationBar from "components/NavigationBar";
import Main from './sections/Main';
import Services from './sections/Services';
import TheProcess from './sections/TheProcess';

import './index.styl';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <NavigationBar />
        <Main />
        <Services />
        <TheProcess />
      </div>
    );
  }
}

export default Landing;
