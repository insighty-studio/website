import React, {Component} from 'react';
import Button from 'imports/components/Button2.0';

import NavigationBar from './components/NavigationBar';
import ContactUsButton from './components/ContactUsButton';

import './index.styl';

class Main extends Component {
  render() {
    return (
      <div className="main-section-bg">
        <div className="main-section">
          <NavigationBar />
          <div className="main-info-bg">
            <div className="main-info">
              <div className="title">
                We Create Web & Mobile Applications That’ll Delight Your Users
              </div>
              <div className="desc">
                Insighty is a software development studio with a focus on creating apps that solve business problems. We
                help our clients connect with customers and stand out from the chaos of the digital world.
              </div>
              <div className="buttons">
                <Button title="Explore" className="explore-btn" />
                <ContactUsButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
