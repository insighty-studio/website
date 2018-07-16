import React, {Component} from 'react';

import Button from 'imports/components/Button';
import Heading from 'imports/components/Typography/Heading';
import Paragraph from 'imports/components/Typography/Paragraph';
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
              <Heading
                animated
                subTitle="Insighty Studio"
                title="We Create Web & Mobile Applications That’ll Delight Your Users"
              />
              <Paragraph animated>
								Insighty is a software development studio with a focus on creating apps that solve
								business problems. We help our clients connect with customers and stand out from
                the chaos of the digital world.
              </Paragraph>
              <div className="buttons"
                   data-aos="fade-up"
                   data-aos-easing="ease-out-sine"
                   data-aos-duration="700"
                   data-aos-delay="400"
              >
                <Button title="Explore" className="explore-btn" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
