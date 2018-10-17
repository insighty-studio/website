import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Button from 'components/interactions/AnimatedButton';
import {RightArrowIcon} from 'icons';

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
        <div className="description">
          <div className="title">
            {`Next project - ${name.toUpperCase()}`}
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
