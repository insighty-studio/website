import React from 'react';
import {
  AmazonPay, Braintree, PayPal, Plaid, Square, Stripe
} from 'icons/FinTechLogos';

import './index.styl';

export default class FinTechLogos extends React.Component {
  render() {
    return (
      <div className="fintech-logos-container">
        <div className="logo"><Stripe /></div>
        <div className="logo"><Square /></div>
        <div className="logo"><Plaid /></div>
        <div className="logo"><Braintree /></div>
        <div className="logo"><PayPal /></div>
        <div className="logo"><AmazonPay /></div>
      </div>
    );
  }
}
