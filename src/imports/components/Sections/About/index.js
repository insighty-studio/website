import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {ExploreButtonIcon} from 'icons';

import './index.styl';

class AboutSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    shortDesc: PropTypes.arrayOf({
      year: PropTypes.number,
      client: PropTypes.string,
      services: PropTypes.string,
    }).isRequired,
    story: PropTypes.arrayOf({
      name: PropTypes.string,
      desc: PropTypes.string,
    }).isRequired,
    logo: PropTypes.node.isRequired
  };

  static defaultProps = {
    className: '',
    logo: null,
    shortDesc: {},
    story: {}
  };

  render() {
    const {
      className, shortDesc: {year, client, services}, story: {name, desc}, logo
    } = this.props;

    return (
      <div className={classnames('about-section', className)}>
        <div className="desc">
          <div className="short">
            <ul>
              <li><span>Year: </span>{year}</li>
              <li><span>Client: </span>{client}</li>
              <li><span>Services: </span>{services}</li>
            </ul>
          </div>
          <div className="story">
            <span>{name} </span>{desc}
          </div>
        </div>
        {logo}
      </div>
    );
  }
}

export default AboutSection;
