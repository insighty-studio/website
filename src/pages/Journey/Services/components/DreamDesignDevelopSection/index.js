import React from 'react';
import Heading from 'components/typography/Heading';
import {BrowserWindows, Compass, FeatherPen} from 'icons';
import './index.styl';
import PropTypes from 'prop-types';
import {Paragraph, SmallHeading} from 'components/typography';
import {HorizontalPadding} from 'components/layout';

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
          <SmallHeading>{title}</SmallHeading>
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
        <HorizontalPadding>
          <Heading>Dream, Design, Develop</Heading>
          <div className="service-blocks-wrapper">
            {this.renderCards()}
          </div>
        </HorizontalPadding>
      </div>
    );
  }
}
