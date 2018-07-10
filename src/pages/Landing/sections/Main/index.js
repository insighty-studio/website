import React, {PureComponent} from 'react';
import Logo from './components/Logo';
import Description from './components/Description';
import NavigationBar from './components/NavigationBar';

import './index.styl';

class Main extends PureComponent {
  render() {
    return (
      <div className="main-section">
        <NavigationBar />
        <Logo desc="We Create Web & Mobile Applications That’ll Delight Your Users" />
        <Description
          title="Insighty"
          text=" is a software development studio with a focus on creating apps that solve business problems.
          We help our clients connect with customers and stand out from the chaos of the digital world."
        />
      </div>
    );
  }
}

export default Main;
