import React, {Component} from 'react';

import './index.styl';
import PropTypes from 'prop-types';

class ServiceCard extends Component {
  render() {
    const {title, description, icon} = this.props;

    return (
      <div className="service-card">
        <div className="service-top">
          <h2 className="service-card-title">{title}</h2>
          {icon}
        </div>
        <p className="service-card-description">{description}</p>
      </div>
    );
  }
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ServiceCard;
