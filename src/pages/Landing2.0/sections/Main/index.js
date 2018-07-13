import React, {Component} from 'react';

import Button from 'imports/components/Button';
import SubTitle from 'imports/components/SubTitle';
import NavigationBar from './components/NavigationBar';
import ContactUsButton from './components/ContactUsButton';

import './index.styl';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-section">
          <NavigationBar />
          <div className="main-info-bg">
            <div className="main-info">
              <SubTitle>Insighty Studio</SubTitle>
              <div className="title">
                We Create Web & Mobile Applications That’ll Delight Your Users
              </div>
              <div className="desc">
                Insighty is a software development studio with a focus on creating apps that solve business problems. We
                help our clients connect with customers and stand out from the chaos of the digital world.
              </div>
              <div className="buttons">
                <Button
                  title="Explore"
                  className="explore-btn"
                  styleType="blue"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
