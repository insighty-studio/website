import React, {Component} from 'react';

import Header from 'components/Header';
import Heading from 'components/typography/Heading';
import {VRGirlInSpace} from 'icons';
import {
  Square, Braintree, PayPal, Stripe, AmazonPay, Plaid,
} from 'icons/FinTechLogos';


import './index.styl';

class Home extends Component {
  render() {
    return (
      <div className="home-page">

        <Header />

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
          <p>BetterYet</p>
          <p>Loyalty for Small Businesses</p>
          <p>
            Mark and Alan, the co-founders of BetterYet, envisioned a
            future where all businesses can set up a loyalty program
            in 30 seconds.
            The problem was that they didn’t have the know-how to
            turn it into reality. We started from clean slate with the
            product that now enjoys a growing user base.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
