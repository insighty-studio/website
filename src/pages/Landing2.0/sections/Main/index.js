import React, {Component} from 'react';

import Button from 'imports/components/Button';
import SubTitle from 'imports/components/SubTitle';
import NavigationBar from './components/NavigationBar';

import './index.styl';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-section">
          <NavigationBar />
          <div className="main-info-bg" data-aos="fade-up" data-aos-easing="ease-out-sine">
            <div className="main-info" >
              <SubTitle>Insighty Studio</SubTitle>
              <div className="title"  data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-delay="125">
                We Create Web & Mobile Applications That’ll Delight Your Users
              </div>
              <div className="desc" data-aos="fade-up" data-aos-easing="ease-out-sine" data-aos-delay="250">
                Insighty is a software development studio with a focus on creating apps that solve business problems. We
                help our clients connect with customers and stand out from the chaos of the digital world.
              </div>
              <div className="buttons" data-aos="fade-up" data-aos-easing="ease-out-sine"
                   data-aos-duration="700"
                   data-aos-delay="400">
                <Button
                  title="Explore"
                  className="explore-btn"
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
