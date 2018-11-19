import React from 'react';
import Heading from 'components/typography/Heading';
import {
  AmazonPay, Braintree, PayPal, Plaid, Square, Stripe
} from 'icons/FinTechLogos';

export default class CoreExpertiseSection extends React.Component {
  render() {
    return (
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
    );
  }
}
