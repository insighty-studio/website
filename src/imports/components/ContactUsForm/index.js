import React, {PureComponent} from 'react';
import classnames from 'classnames';
import {SendButtonIcon} from 'icons';
import SectionHeading from 'components/Typography/SectionHeading';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';
import request from 'utils/request'

import './index.styl';
import {trackEvent} from "../../analytics";

const WEBHOOK_URL = 'https://hooks.slack.com/services/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';

class ContactUsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      messageIsVisible: false,
      formIsSubmitted: false,
      pristine: true,
      name: '',
      email: '',
      phone: '',
      website: '',
      message: '',
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

    request.post(WEBHOOK_URL, formData)
      .then(() => {
        this.setState({
          messageIsVisible: true,
          formIsSubmitted: true,
          name: '',
          email: '',
          phone: '',
          website: '',
          message: '',
        });
        setTimeout(() => this.setState({messageIsVisible: false}), 5000);
      });
  }

  handleFormInput(e) {
    const {pristine} = this.state;
    if (pristine) {
      this.setState({pristine: false});
      trackEvent('Form input started');
    }
    this.setState({[e.target.name]: e.target.value});
  }

  showMessage(message) {
    return (
      <div className={classnames('form-message', this.state.messageIsVisible && 'appearance')}>
        {message}
      </div>
    );
  }

  render() {
    const {
      name, email, phone, website, message
    } = this.state;

    return (
      <div className="contact-us-form">
        <div>
          <SectionHeading subTitle="feel free to" title="contact us" />
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-raw">
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
            </div>
            <div className="form-raw">
              <Input
                name="phone"
                type="phone"
                placeholder="Phone"
                value={phone}
                onChange={e => this.handleFormInput(e)}
              />
              <Input
                name="website"
                type="text"
                placeholder="Website"
                value={website}
                onChange={e => this.handleFormInput(e)}
              />
            </div>
            <TextArea
              required
              name="message"
              value={message}
              placeholder="Message *"
              onChange={e => this.handleFormInput(e)}
            />
            <Button
              className="form-btn"
              title={this.state.formIsSubmitted ? 'Thanks!' : 'SEND'}
              disabled={this.state.formIsSubmitted}
            >
              <SendButtonIcon />
            </Button>
          </form>
          {this.showMessage('*your message has been sent')}
        </div>
      </div>
    );
  }
}

export default ContactUsForm;
