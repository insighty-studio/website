import React, {Component} from 'react';
import {Parallax} from 'react-scroll-parallax';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';

import VRGirlInSpace from 'icons/backgrounds/HomeBG';

import './index.styl';
import './mobile/index.styl';
import {Paragraph} from 'components/typography';
import {HorizontalPadding} from 'components/layout';
import FreeConsultationButton from 'components/interactions/FreeConsultationButton';
import {TextLink} from 'components/interactions';
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
          <TextLink text="More about our services." to="services" />
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

          <div className="home-description">
            <Paragraph>
              You are embarking on a journey of seeing a new Tech Startup through.
              We help you overcome the digital chaos to address a market need before
              someone else seizes the opportunity.
            </Paragraph>
            <Paragraph>
              With our guidance you avoid making the mistakes we already learned from.
              {' '}
              {!expanded
              && <TextLink text="More about your journey." onClick={() => this.setState({expanded: true})} />}
            </Paragraph>
            {expanded && this.renderExpanded()}
          </div>

          {/* TODO home page better yet project details -> see more */}
        </div>

        <div className="home-help-section">
          <HorizontalPadding>
            <Heading>
              Core Expertise
            </Heading>
          </HorizontalPadding>
          <FinTechLogos />
        </div>

        <CaseStudiesSection />
      </Page>
    );
  }
}

export default Home;
