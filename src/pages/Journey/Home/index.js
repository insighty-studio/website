import React, {Component} from 'react';
import classnames from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Heading from 'components/typography/Heading';
import AnimatedButton from 'components/interactions/AnimatedButton';
import {
  VRGirlInSpace, Phone, RightArrowIcon, AppleIcon,
} from 'icons';
import {
  Square, Braintree, PayPal, Stripe, AmazonPay, Plaid,
} from 'icons/FinTechLogos';

import './index.styl';
import './mobile/index.styl';

class Home extends Component {
  state = {
    expanded: false,
  };

  renderExpanded() {
    return (
      <div className="expanded">
        <span>
          {' '}
          You can use our expertise with the best payment platforms and
          tools available today. We offer you a system of going from concept to
          production-ready quickly.
        </span>
      </div>
    );
  }

  render() {
    const {expanded} = this.state;

    return (
      <div className="home-page">

        <Header />

        <div className="home-content">
          <div className="home-bg">
            <VRGirlInSpace className="vr-girl" />
          </div>

          <Heading className="home-heading-main">
            Create The Outlier Software
            That Changes The World.
          </Heading>

          <div className={classnames('home-description', expanded && 'expanded')}>
            <p className="home-description-text">
              You are embarking on a journey of seeing a new FinTech product through.
              We help you overcome the digital chaos to address a market need before
              someone else seizes the opportunity.
            </p>
            <p className="home-description-text">
              With our guidance you avoid making the mistakes we already learned from.
              {!expanded ? (
                <span onClick={() => this.setState({expanded: true})} className="description-more">
                  {' '}
                  More about your journey.
                </span>
              )
                : this.renderExpanded()}
            </p>
            <p className="home-description-text">
              Most of all we like doing mobile apps. We also believe in VR, AR and
              some blockchain here and there. Needless to say, we strive to be state
              of the art. Wow, are you really reading this?
              <span className="description-more">
                {' '}
                <a href="/services">
                  More about our services.
                </a>
              </span>
            </p>
          </div>

        </div>

        <div className="home-help-section">
          <Heading className="home-help-heading">Get Help With</Heading>
          <div className="fintech-logos-container">
            <div className="logo"><Square /></div>
            <div className="logo"><Braintree /></div>
            <div className="logo"><PayPal /></div>
            <div className="logo"><Stripe /></div>
            <div className="logo"><AmazonPay /></div>
            <div className="logo"><Plaid /></div>
          </div>
        </div>

        <div className="home-case-studies">
          <Heading className="case-studies-heading">Select Case Studies</Heading>

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
                title="App Store"
                className="animated-button"
                href="https://itunes.apple.com/us/app/betteryet-local-cash-rewards/id1408033686"
              >
                <AppleIcon />
              </AnimatedButton>
            </div>

            <div className="screens-container">
              <Phone />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Home;
