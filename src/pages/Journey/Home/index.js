import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';
import classnames from 'classnames';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import VRGirlInSpace from 'icons/backgrounds/HomeBG';

import './index.styl';
import './mobile/index.styl';
import {Paragraph} from 'components/typography';
import FreeConsultationButton from 'components/interactions/FreeConsultationButton';
import FinTechLogos from './components/FinTechLogos/index';
import CaseStudiesSection from './components/CaseStudiesSection';

class Home extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <div className="expanded">
        <Paragraph animated>
          You can use our expertise with the best payment platforms and
          tools available today. We offer you a system of going from concept to
          production-ready quickly.
        </Paragraph>
        <Paragraph animated>
          Most of all we like doing mobile apps. We also believe in VR, AR and
          some blockchain here and there. Needless to say, we strive to be state
          of the art. Wow, are you really reading this?
          {' '}
          <span className="description-more">
            <Link to="services">
              More about our services.
            </Link>
          </span>
        </Paragraph>
        <br />
        <FreeConsultationButton />
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

          <div className="home-heading-main">
            <Heading>
              Create The Outlier Software
              That Changes The World
            </Heading>
          </div>

          <div className={classnames('home-description', expanded && 'expanded')}>
            <Paragraph>
              You are embarking on a journey of seeing a new FinTech product through.
              We help you overcome the digital chaos to address a market need before
              someone else seizes the opportunity.
            </Paragraph>
            <Paragraph>
              With our guidance you avoid making the mistakes we already learned from.
              {' '}
            </Paragraph>
            {!expanded ? (
              <a onClick={() => this.setState({expanded: true})} className="description-more">
                  More about your journey.
              </a>
            )
              : this.renderExpanded()}
          </div>

        </div>

        <div className="home-help-section">
          <Heading className="home-help-heading">Core Expertise</Heading>
          <FinTechLogos />
        </div>

        <CaseStudiesSection />
      </Page>
    );
  }
}

export default Home;
