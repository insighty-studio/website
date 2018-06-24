import React, {Component} from 'react';

import SectionHeading from 'components/SectionHeading';
import Input from 'components/Input';
import TextArea from 'components/TextArea';

import './index.styl';

class ContactUs extends Component {
  render() {
    return (
      <div className="contact-us" id="contact-us">
        <SectionHeading title="Contact Us" />
        <form action="" className="contact-us-form">
          <div>
            <Input
              type="text"
              placeholder="Name *"
            />
            <Input
              type="email"
              placeholder="Email *"
            />
          </div>
          <div>
            <Input
              type="number"
              placeholder="Phone"
            />
            <Input
              type="test"
              placeholder="Website"
            />
          </div>
          <TextArea>

          </TextArea>
        </form>
      </div>
    );
  }
}

export default ContactUs;
