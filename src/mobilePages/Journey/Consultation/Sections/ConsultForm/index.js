import React, {Component} from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

import 'react-notifications/lib/notifications.css';

import './index.styl';
import sendContactMessageToSlack from 'utils/sendContactMessageToSlack';

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

    const {name, email, message} = this.state;

    sendContactMessageToSlack({name, email, message})
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
