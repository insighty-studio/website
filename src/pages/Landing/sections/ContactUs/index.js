import React, {PureComponent} from 'react';
import ContactUsForm from 'components/ContactUsForm';

class ContactUs extends PureComponent {
  render() {
    return (
      <div className="contact-us">
        <ContactUsForm />
      </div>
    );
  }
}

export default ContactUs;
