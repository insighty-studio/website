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
  };

  render() {
    const {
      className, shortDesc: {year, client, services}, story: {title, desc, subtitle}, logo
    } = this.props;

    return (
      <div className={classnames('about-section', className)}>
        <div className="desc">
          <div className="short">
            <ul>
              <li>
                <ShortDescription title="Year" description={year} />
              </li>
              <li>
                <ShortDescription title="Client" description={client} />
              </li>
              <li>
                <ShortDescription title="Services" description={services} />
              </li>
            </ul>
          </div>
          <Description
            subtitle={subtitle}
            title={title}
            text={desc}
          />
        </div>
        <AboutBackground />
        {logo}
      </div>
    );
  }
}

export default AboutSection;
