import React, {PureComponent} from 'react';
import ContactUsForm from 'components/ContactUsForm';
import Footer from 'components/Footer';

class ContactUs extends PureComponent {
  render() {
    return (
      <div className="contact-us">
        <ContactUsForm />
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
