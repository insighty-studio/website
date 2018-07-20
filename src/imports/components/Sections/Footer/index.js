import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from 'components/Footer';

import './index.styl';

class FooterSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    projects: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })).isRequired
  };

  static defaultProps = {
    className: '',
    projects: {},
  };

  render() {
    const {className, projects} = this.props;

    return (
      <div className={classnames('footer-section', className)}>
        <div className="projects">
          {projects.map(({name, color, backgroundColor}) => (
            <div key={backgroundColor} className="project" style={{backgroundColor}}>
              <div className="project-name">
                {name}
                <span style={{backgroundColor: color}} />
              </div>
            </div>
          ))}
        </div>
        <Footer
          address="240 Richmond St W, Toronto, ON M5V 1V6"
          email="hello@insighty.studio"
        />
      </div>
    );
  }
}

export default FooterSection;
