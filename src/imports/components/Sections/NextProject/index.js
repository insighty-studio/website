import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
import {RightArrowIcon, HouseIcon} from 'icons';

import './index.styl';
import './mobile/index.styl';

class NextProject extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    href: PropTypes.string
  };

  static defaultProps = {
    name: '',
    desc: '',
    href: ''
  };

  render() {
    const {name, desc, href} = this.props;

    return (
      <div className="next-project-section">
        <HouseIcon />
        <div className="description">
          <div className="title">
            {`Next project - ${name}`}
          </div>
          <div className="desc">
            {desc}
          </div>
          <div className="full-review-btn">
            <Button
              title="Full review"
              href={href}
            >
              <RightArrowIcon />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default NextProject;
