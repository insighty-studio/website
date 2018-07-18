import React, {Component} from 'react';
import {Link} from 'react-scroll';

import Button from 'components/Button';
import Heading from 'components/Typography/Heading';
import Paragraph from 'components/Typography/Paragraph';
import NavigationBar from './components/NavigationBar';
import {ExploreButtonIcon} from 'icons';

import './index.styl';

class Main extends Component {
  render() {
    return (
      <div className="header">
        <div className="content">
          <NavigationBar />
          <div className="content-info-bg" data-aos="fade-up" data-aos-easing="ease-out-sine">
            <div className="content-info">
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
                <Link smooth to="process" duration={700}>
                  <Button title="explore" className="explore-btn">
                    <ExploreButtonIcon />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
