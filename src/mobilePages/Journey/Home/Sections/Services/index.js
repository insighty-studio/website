import React, {Component} from 'react';

import {Heading} from 'components/typography';
import {
  AmazonPay, Braintree, PayPal, Plaid, Square, Stripe
} from 'icons/FinTechLogos';

import './index.styl';

class Services extends Component {
  render() {
    return (
      <div className="services-section">
        <Heading>Get Help With</Heading>
        <div className="services-cards">
          <div className="logo"><Braintree /></div>
          <div className="logo"><Square /></div>
          <div className="logo"><PayPal /></div>
          <div className="logo"><AmazonPay /></div>
          <div className="logo"><Stripe /></div>
          <div className="logo"><Plaid /></div>
        </div>
      </div>
    );
  }
}

export default Services;
