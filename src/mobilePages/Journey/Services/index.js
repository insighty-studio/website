import React, {Component} from 'react';

import MobileHeader from 'components/MobileHeader';
import MobileFooter from 'components/MobileFooter';
import {Heading} from 'components/typography';
import FullPageScroll from 'components/interactions/FullPageScroll';

import {BrowserWindows, Compass, FeatherPen} from 'icons';

import Intro from './Sections/Intro';
import IntroSecond from './Sections/IntroSecond';
import ServiceCard from './Sections/ServiceCard';

import './index.styl';

class MobileServices extends Component {
  render() {
    return (
      <div className="services-page">
        <MobileHeader />
        <FullPageScroll>
          <div className="section">
            <Intro />
          </div>
          <div className="section">
            <IntroSecond />
          </div>
          <div className="section sc-section">
            <Heading className="service-cards-heading">
              Dream, Design, Develop
            </Heading>
            <p className="service-cards-description">
              We are always looking to hear from people that want to change the world with software.
              We call them heroes. If you’re one of them, please get in touch.
            </p>
            <div className="slide">
              <ServiceCard
                title="Branding"
                description="
                      The brand lives and evolves in the minds of people.
                      We build brands for companies that are changing how the world works.
                    "
                icon={<FeatherPen />}
              />
            </div>
            <div className="slide">
              <ServiceCard
                title="Design"
                description="
                      We design applications that intuitively meet the needs of your customers and,
                      in turn keep them sticking around for good.
                    "
                icon={<Compass />}
              />
            </div>
            <div className="slide">
              <ServiceCard
                title="Development"
                description="
                      With over a decade of experience our team creates flawless
                      applications that work exactly as you had envisioned.
                    "
                icon={<BrowserWindows />}
              />
            </div>
          </div>
          <div className="section footer-section">
            <MobileFooter />
          </div>
        </FullPageScroll>
      </div>
    );
  }
}

export default MobileServices;
