import React, {PureComponent} from 'react';
import request from 'utils/request';
import {RightArrowIcon} from 'icons';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import SectionHeading from 'components/Typography/SectionHeading';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import {trackEvent} from 'analytics';

import './index.styl';
import './mobile/index.styl';

const WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const DEV_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

class ContactUsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      website: '',
      message: '',
      messageIsVisible: false,
      pristine: true
    };
  }

  handleSubmit(e) {
    trackEvent('Form submit pressed');
    e.preventDefault();

    const {
      name, email, phone, website, message
    } = this.state;
    const formData = JSON.stringify({
      attachments: [
        {
          color: '#000000',
          pretext: 'New Contact Us form request',
          author_name: `From: ${name}`,
          text: `*Email:* ${email}\n*Phone:* ${phone}\n*Website:* ${website}\n*Message:* _${message}_`,
        }
      ]
    });

    request.post(process.env.NODE_ENV === 'development' ? DEV_WEBHOOK_URL : WEBHOOK_URL, formData)
      .then(() => {
        this.setState({
          name: '',
          email: '',
          phone: '',
          website: '',
          message: '',
          messageIsVisible: true
        });
        NotificationManager.success('Your message has been sent!', null, 5000);
        setTimeout(() => this.setState({messageIsVisible: false}), 5000);
      });
  }

  handleFormInput(e, pristine) {
    if (pristine) {
      this.setState({pristine: false});
      trackEvent('Form input started');
    }
    this.setState({[e.target.name]: e.target.value});
  }

  showMessage(message) {
    return (
      <div className="form-message">
        {message}
      </div>
    );
  }

  render() {
    const {
      name, email, phone, website, message, messageIsVisible, pristine
    } = this.state;

    return (
      <div className="contact-us-form">
        <SectionHeading subTitle="feel free to" title="contact us" />
        <form onSubmit={e => this.handleSubmit(e, pristine)}>
          <div className="form-raw">
            <Input
              required
              name="name"
              type="text"
              placeholder="Name *"
              value={name}
              onChange={e => this.handleFormInput(e, pristine)}
            />
            <Input
              required
              name="email"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={e => this.handleFormInput(e, pristine)}
            />
          </div>
          <div className="form-raw">
            <Input
              name="phone"
              type="phone"
              placeholder="Phone"
              value={phone}
              onChange={e => this.handleFormInput(e, pristine)}
            />
            <Input
              name="website"
              type="text"
              placeholder="Website"
              value={website}
              onChange={e => this.handleFormInput(e, pristine)}
            />
          </div>
          <TextArea
            required
            name="message"
            value={message}
            placeholder="Message *"
            onChange={e => this.handleFormInput(e, pristine)}
          />
          <Button
            className="form-btn"
            type="button"
            title={messageIsVisible ? 'Thanks!' : 'Send'}
            disabled={messageIsVisible}
          >
            <RightArrowIcon />
          </Button>
        </form>
        {messageIsVisible && <NotificationContainer />}
      </div>
    );
  }
}

export default ContactUsForm;
