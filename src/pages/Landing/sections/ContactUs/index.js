import React, {PureComponent} from 'react';
import ContactUsForm from 'components/ContactUsForm';
import Footer from 'components/Footer';
import {
  AngelIcon,
  BloggerIcon,
  ClutchIcon,
  LinkedinIcon,
} from 'icons';

class ContactUs extends PureComponent {
  render() {
    return (
      <div className="contact-us">
        <ContactUsForm />
        <Footer
          landingStyle
          links={[
            {text: 'Home', to: 'header'},
            {text: 'Services', to: 'services'},
            {text: 'Process', to: 'process'},
            {text: 'Contacts', to: 'contact-us'},
          ]}
          socials={[
            {icon: <LinkedinIcon />, link: 'https://www.linkedin.com/company/insighty/'},
            {icon: <BloggerIcon />, link: 'http://alexpanov.me/'},
            {icon: <ClutchIcon />, link: 'https://clutch.co/profile/insighty'},
            {icon: <AngelIcon />, link: 'https://angel.co/insighty'},
          ]}
          rights="© 2018 Insighty All Rights Reserved"
          email="hello@insighty.studio"
          address="240 Richmond St W, Toronto, ON M5V 1V6"
        />
      </div>
    );
  }
}

export default ContactUs;
