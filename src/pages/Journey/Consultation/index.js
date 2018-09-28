import React, {Component} from 'react';
import request from 'utils/request';

import Page from 'components/Page';
import Button from 'components/interactions/Button';
import Heading from 'components/typography/Heading';
import {ConsultUs, MailBox} from 'icons/backgrounds/ConsultBG';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import './index.styl';
import './mobile/index.styl';

const WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const DEV_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

class Consultation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      name, email, message
    } = this.state;

    const formData = JSON.stringify({
      attachments: [
        {
          color: '#000000',
          pretext: 'New Contact Us form request',
          author_name: `From: ${name}`,
          text: `*Email:* ${email}\n*Message:* _${message}_`,
        }
      ]
    });

    request.post(process.env.NODE_ENV === 'development' ? DEV_WEBHOOK_URL : WEBHOOK_URL, formData)
      .then(() => {
        this.setState({
          name: '',
          email: '',
          message: '',
        });
      });
  }

  handleFormInput(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {name, email, message} = this.state;

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
          <form className="mail-form" onSubmit={e => this.handleSubmit(e)}>
            <Input
              required
              name="name"
              type="text"
              placeholder="Name *"
              value={name}
              onChange={e => this.handleFormInput(e)}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={e => this.handleFormInput(e)}
            />
            <div className="mail-time">
              <TextArea
                required
                name="message"
                value={message}
                placeholder="(Optional) Tomorrow at 11:30 am or 4 pm EST..."
                onChange={e => this.handleFormInput(e)}
              />
            </div>
            <Button type="submit">Send</Button>
          </form>
        </div>
      </Page>
    );
  }
}

export default Consultation;
