import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import {ConsultUs, MailBox} from 'icons/backgrounds/ConsultBG';
import sendContactMessageToSlack from 'utils/sendContactMessageToSlack';

import 'react-notifications/lib/notifications.css';

import './index.styl';
import './mobile/index.styl';
import ConsultationForm from './components/ConsultationForm';

class Consultation extends Component {
  state = {
    showSuccess: false,
  };

  handleSubmit(values) {
    return sendContactMessageToSlack(values)
      .then(() => {
        this.setState({showSuccess: true});
        NotificationManager.success('Thank you, we will get back to you promptly!', null, 5000);
        setTimeout(() => this.setState({showSuccess: false}), 5000);
      });
  }

  render() {
    const {showSuccess} = this.state;

    return (
      <Page className="consult-page">
        {showSuccess && <NotificationContainer />}

        <div className="consult-bg">
          <ConsultUs className="consult-illustration" />
          <MailBox className="mail-box" />
        </div>

        <div className="consult-content">
          <Heading className="consult-heading">Fancy A Free 30-Minute Product Development Session?</Heading>
          <div className="consult-text-mobile">
            <p className="consult-para">Here’s the plan:</p>
            <p className="consult-para">- We learn about your idea.</p>
            <p className="consult-para">
              - We outline the community of people that you want to reach with your product.
            </p>
            <p className="consult-para">- You get your idea visualized via mockups a couple of days after.</p>
          </div>
          <p className="consult-para">Here’s the plan:</p>
          <p className="consult-para">- We learn as much as we can about your idea.</p>
          <p className="consult-para">- We outline the community of people that you want to reach with your product.</p>
          <p className="consult-para">- You get your idea visualized via mockups a couple of days after.</p>
        </div>

        <div className="mail-section">
          <Heading className="mail-heading">
            Book your free 30 minute product development and design consultation
          </Heading>
          <ConsultationForm onSubmit={e => this.handleSubmit(e)} />
        </div>
      </Page>
    );
  }
}

export default Consultation;
