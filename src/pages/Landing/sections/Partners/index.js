import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  Jackman, Lieferando, Menlopark, Momentum, Staples, Teradata
} from './icons';

import './index.styl';
import './mobile/index.styl';

class AnimatedLogo extends React.Component {
  render() {
    const {logo: {component: Component, delay}} = this.props;
    return (
      <div
        data-aos="fade-in"
        data-aos-easing="ease-in-sine"
        data-aos-delay={delay}
      >
        <Component />
      </div>
    );
  }
}

AnimatedLogo.propTypes = {
  logo: PropTypes.object.isRequired,
};

const logos = [
  {component: Lieferando, delay: 700},
  {component: Momentum, delay: 500},
  {component: Jackman, delay: 400},
  {component: Teradata, delay: 300},
  {component: Menlopark, delay: 600},
  {component: Staples, delay: 200},
];

class Partners extends PureComponent {
  render() {
    return (
      <div className="partners">
        {logos.map(logo => <AnimatedLogo logo={logo} />)}
      </div>
    );
  }
}

export default Partners;
