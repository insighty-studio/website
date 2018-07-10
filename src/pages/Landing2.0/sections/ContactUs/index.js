import React, {Component} from 'react';
import axios from 'axios';
import classnames from 'classnames';

import SectionHeading from 'imports/components/SectionHeading';
import Input from 'imports/components/Input';
import TextArea from 'imports/components/TextArea';
import Button from 'imports/components/Button';
import Footer from './components/Footer';

import './index.styl';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageIsVisible: false,
      isFormSubmitted: false,
      name: '',
      email: '',
      phone: '',
      website: '',
      message: '',
    };
  }

  showMessage(message) {
    return (
      <div className={classnames('form-message', this.state.messageIsVisible && 'appearance')}>
        {message}
      </div>
    );
  }

  handleSubmit(e) {
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
    axios.post('https://hooks.slack.com/services/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', formData)
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
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {
      name, email, phone, website, message
    } = this.state;
    return (
      <div className="contact-us" id="contact-us">
        <div className="contact-form-section">
          <SectionHeading title="Contact Us" />
          <form
            className="contact-form"
            onSubmit={e => this.handleSubmit(e)}
          >
            <div>
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
            <div>
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
            <div>
							<Button
								title={this.state.isFormSubmitted ? 'Thanks!' : 'Send'}
                styleType="white"
								disabled={this.state.isFormSubmitted}
							/>
            </div>
          </form>
          {this.showMessage('*you message has been sent')}
        </div>
        <Footer
          address="240 Richmond St W, Toronto, ON M5V 1V6"
          email="hello@insighty.studio"
        />
      </div>
    );
  }
}

export default ContactUs;
