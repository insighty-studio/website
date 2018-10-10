import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';
import classnames from 'classnames';

import Page from 'components/Page';
import {Heading} from 'components/Typography';
import AnimatedButton from 'components/interactions/AnimatedButton';
import Button from 'components/interactions/Button';
import {AppleIcon, RightArrowIcon} from 'icons';
import {
  AmazonPay, Braintree, PayPal, Plaid, Square, Stripe
} from 'icons/FinTechLogos';
import VRGirlInSpace from 'icons/backgrounds/HomeBG';

import './index.styl';
import './mobile/index.styl';
import {trackEvent} from 'analytics';

class CaseStudiesSection extends React.Component {
  onClickAppStore() {
    trackEvent('BetterYet App Store Link Clicked');
  }

  render() {
    return (
      <div className="home-case-studies">
        <Heading className="case-studies-heading">Our Work</Heading>

        <div className="case-studies-bg">
          <div className="case-studies-description">
            <p className="case-studies-title">BetterYet</p>
            <p className="case-studies-subtitle">Loyalty for Small Businesses</p>
            <div className="case-studies-separator" />
            <p className="case-studies-text">
              Mark and Alan, the co-founders of BetterYet, envisioned a
              future where all businesses can set up a loyalty program
              in 30 seconds.
              <br />
              The problem was that they didn’t have the know-how to
              turn it into reality. We started from clean slate with the
              product that now enjoys a growing user base.
            </p>
          </div>

          <div className="animated-button-container">
            <AnimatedButton
              title="Project Details"
              className="animated-button"
              href="/betteryet"
            >
              <RightArrowIcon color="white" />
            </AnimatedButton>

            <AnimatedButton
              opensNewTab
              onClick={() => this.onClickAppStore()}
              title="App Store"
              className="animated-button"
              href="https://itunes.apple.com/us/app/betteryet-local-cash-rewards/id1408033686"
            >
              <AppleIcon />
            </AnimatedButton>
          </div>

          <div className="screens-container">
            <img alt="phone screenshot" className="phone-image" src="/images/screens/BY/BYScreen1.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen2.png" />
            <img alt="phone screenshot" src="/images/screens/BY/BYScreen3.png" />
          </div>
        </div>
      </div>
    );
  }
}

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
              You are embarking on a journey of seeing a new FinTech product through.
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

        </div>

        <div className="home-help-section">
          <Heading className="home-help-heading">Core Expertise</Heading>
          <div className="fintech-logos-container">
            <div className="logo"><Stripe /></div>
            <div className="logo"><Square /></div>
            <div className="logo"><Plaid /></div>
            <div className="logo"><Braintree /></div>
            <div className="logo"><PayPal /></div>
            <div className="logo"><AmazonPay /></div>
          </div>
        </div>

        <CaseStudiesSection />
      </Page>
    );
  }
}

export default Home;
