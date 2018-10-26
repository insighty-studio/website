import React, {Component} from 'react';
import request from 'utils/request';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

import './index.styl';

const WEBHOOK_URL = 'https://hooks.slack.com/services/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';
const DEV_WEBHOOK_URL = 'https://hooks.slack.com/services/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';

class Intro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      showSuccess: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      name, email, message
    } = this.state;

    const formData = JSON.stringify({
      attachments: [
        {
          color: '#000000',
          pretext: 'New Contact Us form request',
          author_name: `From: ${name}`,
          text: `*Email:* ${email}\n*Message:* _${message}_`,
        }
      ]
    });

    request.post(process.env.NODE_ENV === 'development' ? DEV_WEBHOOK_URL : WEBHOOK_URL, formData)
      .then(() => {
        this.setState({
          name: '',
          email: '',
          message: '',
          showSuccess: true,
        });
        NotificationManager.success('Thank you, we will get back to you!', null, 5000);
        setTimeout(() => this.setState({showSuccess: false}), 5000);
      });
  }

  render() {
    const {
      name, email, message, showSuccess,
    } = this.state;

    console.log(name, email, message);

    return (
      <div className="form-section">
        {showSuccess && <NotificationContainer />}
        <form onSubmit={e => this.handleSubmit(e)}>
          <p className="input-label">Your Name*</p>
          <input
            className="input"
            type="text"
            placeholder="Name *"
            value={name}
            onChange={({target}) => this.setState({name: target.value})}
            required
          />
          <p className="input-label">Your Email*</p>
          <input
            className="input"
            type="email"
            placeholder="Email *"
            value={email}
            onChange={({target}) => this.setState({email: target.value})}
            required
          />
          <p className="input-label">When would be the best time to connect?</p>
          <textarea
            className="input-textarea"
            placeholder="(Optional) Tomorrow at 11:30 am or 4 pm EST..."
            value={message}
            onChange={({target}) => this.setState({message: target.value})}
          />
          <button className="submit-button" type="submit">BOOK NOW</button>
        </form>
      </div>
    );
  }
}

export default Intro;
