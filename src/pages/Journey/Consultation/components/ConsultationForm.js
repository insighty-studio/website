import React from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input';
import TextArea from 'components/TextArea';
import Button from 'components/interactions/Button';
import {trackEvent} from 'analytics';

const EMPTY_VALUES = {
  name: '',
  email: '',
  message: '',
};

export default class ConsultationForm extends React.Component {
  state = {
    ...EMPTY_VALUES,
    submitting: false,
    pristine: true
  };

  onFormInputChange(e) {
    const {pristine} = this.state;
    if (pristine) {
      this.setState({pristine: false}, () => trackEvent('Consult form touched'));
    }
    this.setState({[e.target.name]: e.target.value});
  }

  onSubmit(e) {
    e.preventDefault();

    const {onSubmit} = this.props;
    this.setState({submitting: true});

    onSubmit(this.state)
      .then(() => this.setState(EMPTY_VALUES))
      .then(() => trackEvent('Consult form submitted'))
      .finally(() => this.setState({submitting: false}));
  }

  render() {
    const {
      name, email, message, submitting
    } = this.state;
    return (
      <form className="mail-form" onSubmit={e => this.onSubmit(e)}>
        <Input
          required
          name="name"
          id="name"
          type="text"
          placeholder="Name *"
          label={'What\'s your name?*'}
          value={name}
          onChange={e => this.onFormInputChange(e)}
        />
        <Input
          required
          name="email"
          id="email"
          type="email"
          placeholder="Email *"
          label={'What\'s your email?*'}
          value={email}
          onChange={e => this.onFormInputChange(e)}
        />
        <div className="mail-time">
          <TextArea
            required
            name="message"
            value={message}
            placeholder="(Optional) Tomorrow at 11:30 am or 4 pm EST..."
            label="When would you like to have a chat?"
            onChange={e => this.onFormInputChange(e)}
          />
        </div>
        <Button type="submit" disabled={submitting}>BOOK NOW</Button>
      </form>
    );
  }
}

ConsultationForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
