import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Description from 'components/BigDescription';

import AboutBackground from './components/AboutBackground';
import ShortDescription from './components/ShortDescription';

import './index.styl';

class AboutSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    shortDesc: PropTypes.shape({
      year: PropTypes.number,
      client: PropTypes.string,
      services: PropTypes.string,
    }).isRequired,
    story: PropTypes.shape({
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
              <li><ShortDescription title="Year" description={year} /></li>
              <li><ShortDescription title="Client" description={client} /></li>
              <li><ShortDescription title="Services" description={services} /></li>
            </ul>
          </div>
          <Description
            page="betteryet"
            subtitle="Mission"
            title="Loyalty programs for the local shoppers"
            text="BetterYet missions is to equip small and medium-sized businesses with a simple way to set up
            loyalty programs for the local shoppers. We are taking care of all the technology related issues
            from concept to design to implementation."
          />
        </div>
        <AboutBackground />
        {logo}
      </div>
    );
  }
}

export default AboutSection;
