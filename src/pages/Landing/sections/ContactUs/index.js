import React, {Component} from 'react';

import SectionHeading from 'components/SectionHeading';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/Button';

import Footer from './components/Footer';

import './contact-us-section.styl';

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us" id="contact-us">
        <div className="contact-form-section">
          <SectionHeading title="Contact Us" />
          <form className="contact-form">
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
                type="number"
                placeholder="Phone"
              />
              <Input
                type="test"
                placeholder="Website"
              />
            </div>
            <TextArea />
            <Button title="Send" />
          </form>

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
