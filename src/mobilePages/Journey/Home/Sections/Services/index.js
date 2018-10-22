import React, {Component} from 'react';

import {
  AmazonPay, Braintree, PayPal, Plaid, Square, Stripe
} from 'icons/FinTechLogos';

import './index.styl';

class Services extends Component {
  render() {
    return (
      <div className="services-section">
        <h1 className="services-heading">
          Get Help With
        </h1>
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
