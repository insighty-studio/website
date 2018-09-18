import React, {Component} from 'react';

import {VRGirlInSpace} from 'icons';

import './index.styl';

class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="vr-girl-container">
          <VRGirlInSpace className="vr-girl" />
        </div>
      </div>
    );
  }
}

export default Home;
