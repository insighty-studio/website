import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Link} from 'react-scroll';

import Button from 'components/Button';
import Heading from 'components/Typography/Heading';
import Paragraph from 'components/Typography/Paragraph';
import {ExploreButtonIcon} from 'icons';

import NavigationBar from './components/NavigationBar';
import Illustration from './components/Illustration';

import './index.styl';
import {trackEvent} from "imports/analytics";

class Main extends Component {
  onClickExplore() {
    trackEvent('Explore clicked')
  }

  render() {
    return (
      <div className="header">
        <NavigationBar />
        <div className="content">
          <Parallax
            className="content-info"
            offsetYMax={40}
            offsetYMin={-40}
          >
            <Heading
              animated
              subTitle="Insighty Studio"
              title="We Create Web & Mobile Applications That’ll Delight Your Users"
            />
            <Paragraph>
              Insighty is a software development studio with a focus on creating apps that solve
              business problems. We help our clients connect with customers and stand out from
              the chaos of the digital world.
            </Paragraph>
            <div className="buttons">
              <Link smooth to="services" duration={700} onClick={() => this.onClickExplore()}>
                <Button title="explore" className="explore-btn">
                  <ExploreButtonIcon />
                </Button>
              </Link>
            </div>
          </Parallax>

          <Illustration />
        </div>
      </div>
    );
  }
}

export default Main;
