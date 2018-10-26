import React, {Component} from 'react';
import TeamChat from 'icons/backgrounds/TeamBG';

import './index.styl';

class Intro extends Component {
  render() {
    return (
      <div className="intro-section">
        <h1 className="intro-heading">
          Meet the Team
        </h1>
        <p className="intro-description-first">
          These are the people behind Insighty. Here is everyone practicing envisioning the future.
        </p>
        <div className="illustration">
          <TeamChat />
        </div>
        <p className="intro-description-second">
          “How do you see
          technology impact our
          planet over the next 7 years?”
        </p>
      </div>
    );
  }
}

export default Intro;
