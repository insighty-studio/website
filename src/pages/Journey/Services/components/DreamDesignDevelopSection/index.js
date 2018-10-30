import React from 'react';
import Heading from 'components/typography/Heading';
import {BrowserWindows, Compass, FeatherPen} from 'icons';
import './index.styl';
import PropTypes from 'prop-types';
import {Paragraph} from 'components/typography';

const items = [
  {
    title: 'Design',
    text: 'We design applications that intuitively meet the needs of your customers and, '
      + 'in turn keep them sticking around for good.',
    icon: Compass
  },
  {
    title: 'Development',
    text: 'With over a decade of experience our team creates flawless applications that work '
      + 'exactly as you had envisioned.',
    icon: BrowserWindows
  },
  {
    title: 'Branding',
    text: 'The brand lives and evolves in the minds of people. '
      + 'We build brands for companies that are changing how the world works.',
    icon: FeatherPen
  },
];

class Card extends React.Component {
  render() {
    const {card: {icon: Icon, title, text}} = this.props;
    return (
      <div className="block-wrapper">
        <div className="service-block">
          <Icon />
          <h3 className="service-block-heading">{title}</h3>
          <Paragraph>
            {text}
          </Paragraph>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired
};

export default class DreamDesignDevelopSection extends React.Component {
  renderCards() {
    return items.map(card => (<Card card={card} key={card.title} />));
  }

  render() {
    return (
      <div className="services-dream-section">
        <div className="services-dream-heading">
          <Heading>Dream, Design, Develop</Heading>
        </div>
        <p className="services-dream-text-mobile">
          We are always looking to hear from people that want to change the world with software.
          We call them heroes. If you’re one of them, please get in touch.
        </p>
        <div className="services-dream-blocks">
          <div className="service-blocks-wrapper">
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}
