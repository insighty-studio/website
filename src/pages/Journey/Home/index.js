import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import Button from 'components/interactions/Button';

import VRGirlInSpace from 'icons/backgrounds/HomeBG';

import CaseStudiesSection from './components/CaseStudiesSection';
import CoreExpertiseSection from './components/CoreExpertiseSection';
import './index.styl';
import './mobile/index.styl';

class Home extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <div className="expanded">
        <p className="home-description-text">
          You can use our expertise with the best payment platforms and
          tools available today. We offer you a system of going from concept to
          production-ready quickly.
        </p>
        <p className="home-description-text">
          Most of all we like doing mobile apps. We also believe in VR, AR and
          some blockchain here and there. Needless to say, we strive to be state
          of the art. Wow, are you really reading this?
          {' '}
          <span className="description-more">
            <Link to="services">
              More about our services.
            </Link>
          </span>
        </p>
        <Link className="header-link" to="consult">
          <Button className="services-button">FREE CONSULTATION</Button>
        </Link>
      </div>
    );
  }

  render() {
    // TODO track expand click
    // TODO track free consultation click
    const {expanded} = this.state;

    return (
      <Page className="home-page">
        <div className="home-content">
          <Parallax
            className="home-bg"
            offsetYMax={70}
            offsetYMin={-50}
            slowerScrollRate
          >
            <VRGirlInSpace className="vr-girl" />
          </Parallax>

          <Heading className="home-heading-main">
            Create The Outlier Software
            That Changes The World
          </Heading>

          <div className={classnames('home-description', expanded && 'expanded')}>
            <p className="home-description-text">
              You are embarking on a journey of seeing a new Tech Startup through.
              We help you overcome the digital chaos to address a market need before
              someone else seizes the opportunity.
            </p>
            <p className="home-description-text">
              With our guidance you avoid making the mistakes we already learned from.
              {' '}
            </p>
            {!expanded ? (
              <span onClick={() => this.setState({expanded: true})} className="description-more">
                More about your journey.
              </span>
            )
              : this.renderExpanded()}
          </div>

          {/* TODO home page better yet project details -> see more */}
        </div>

        <CoreExpertiseSection />
        <CaseStudiesSection />
      </Page>
    );
  }
}

export default Home;
