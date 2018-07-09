import React, {PureComponent} from 'react';
import {ContactUsIcon} from 'imports/icons';

import './contact-us-btn.styl';

class ContactUsButton extends PureComponent {
  render() {
    return (
      <a href="/" className="contact-us-btn">
        Contact Us
        <ContactUsIcon />
      </a>
    );
  }
}

export default ContactUsButton;
