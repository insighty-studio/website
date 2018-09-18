import React, {Component} from 'react';

import Header from 'components/Header';
import Heading from 'components/typography/Heading';
import {VRGirlInSpace, Phone} from 'icons';
import {
  Square, Braintree, PayPal, Stripe, AmazonPay, Plaid,
} from 'icons/FinTechLogos';

import design from './Home@2x.png';

import './index.styl';

class Home extends Component {
  render() {
    return (
      <div className="home-page">

        <Header />

        <img src={design} alt="design" className="design" />
        <div className="vr-girl-container">
          <VRGirlInSpace className="vr-girl" />
        </div>

        <div className="home-content">

          <Heading className="home-heading-main">
            Create The Outlier Software
            <br />
            That Changes The World.
          </Heading>

          <div className="home-description">
            <p className="home-description-text">
              You are embarking on a journey of seeing a new FinTech product through.
              <br />
              We help you overcome the digital chaos to address a market need before
              <br />
              someone else seizes the opportunity.
            </p>
            <p className="home-description-text">
              With our guidance you avoid making the mistakes we already learned from.
              <br />
              <span className="description-more">More about your journey.</span>
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
                <br />
                future where all businesses can set up a loyalty program
                <br />
                in 30 seconds.
                <br />
                The problem was that they didn’t have the know-how to
                <br />
                turn it into reality. We started from clean slate with the
                <br />
                product that now enjoys a growing user base.
              </p>
            </div>

            <div className="screens-container">
              <Phone />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
