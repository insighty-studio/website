import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

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
        <a href="#" className="title">Ready start a project?</a>
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
      </div>
    );
  }
}

export default FooterSection;
