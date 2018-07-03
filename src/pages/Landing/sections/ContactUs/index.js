import React, {Component} from 'react';
import classnames from 'classnames';

import SectionHeading from 'imports/components/SectionHeading';
import Input from 'imports/components/Input';
import TextArea from 'imports/components/TextArea';
import Button from 'imports/components/Button';
import Footer from './components/Footer';

import './styles/contact-us-section.styl';

class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMessageVisible: false,
      isFormSubmitted: false,
    };
  }

  showMessage(message) {
    return (
      <div className={classnames('form-message', this.state.isMessageVisible && 'appearance')}>
        {message}
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({isMessageVisible: true, isFormSubmitted: true});
    setTimeout(() => this.setState({isMessageVisible: false}), 5000);
  }

  render() {
    return (
      <div className="contact-us" id="contact-us">
        <div className="contact-form-section">
          <SectionHeading title="Contact Us" />
          <form className="contact-form" onSubmit={e => this.handleSubmit(e)}>
            <div className="form-row">
              <Input
                type="text"
                placeholder="Name *"
              />
              <Input
                type="email"
                placeholder="Email *"
              />
            </div>
            <div className="form-row">
              <Input
                type="phone"
                placeholder="Phone"
              />
              <Input
                type="test"
                placeholder="Website"
              />
            </div>
            <TextArea />
            <Button
              disabled={this.state.isFormSubmitted}
              title={this.state.isFormSubmitted ? 'Thanks!' : 'Send'}
            />
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
