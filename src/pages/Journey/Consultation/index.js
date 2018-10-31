import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import {ConsultUs, MailBox} from 'icons/backgrounds/ConsultBG';
import sendContactMessageToSlack from 'utils/sendContactMessageToSlack';
import Paragraph from 'components/typography/Paragraph';
import {HorizontalPadding} from 'components/layout';
import SmallHeading from 'components/typography/SmallHeading';

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

        <HorizontalPadding>
          <div className="consult-content">
            <Heading>Fancy A Free 30-Minute Product Development Session?</Heading>
            <Paragraph>Here’s the plan:</Paragraph>
            <Paragraph>
              - We learn as much as we can about your idea.
              <br />
              - We outline the community of people that you want to reach with your product.
              <br />
              - You get your idea visualized via mockups a couple of days after.
            </Paragraph>
          </div>

          <div className="mail-section">
            <SmallHeading>
              Book your free 30 minute product development and design consultation
            </SmallHeading>
            <ConsultationForm onSubmit={e => this.handleSubmit(e)} />
          </div>
        </HorizontalPadding>
      </Page>
    );
  }
}

export default Consultation;
