import React, {Component} from 'react';

import Page from 'components/Page';
import Heading from 'components/typography/Heading';
import {ConsultUs, MailBox} from 'icons/backgrounds/ConsultBG';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import './index.styl';
import './mobile/index.styl';

class Consultation extends Component {
  render() {
    return (
      <Page className="consult-page">
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
          <form className="mail-form">
            <Input
              required
              name="name"
              type="text"
              placeholder="Name *"
              value=""
              onChange={() => null}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Email *"
              value=""
              onChange={() => null}
            />
            <div className="mail-time">
              <TextArea
                required
                name="message"
                value=""
                placeholder="(Optional) Tomorrow at 11:30 am or 4 pm EST..."
                onChange={() => null}
              />
            </div>
          </form>
        </div>
      </Page>
    );
  }
}

export default Consultation;
