import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import OpacityAnimation from 'imports/components/OpacityAnimation';

import './index.styl';

class WorkItem extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    delay: PropTypes.number,
    link: PropTypes.string,
  };

  static defaultProps = {
    title: '',
    color: '',
    delay: 0,
    link: ''
  };

  render() {
    const {title, color, delay, link} = this.props;

    return (
      <div className="work-item">
        <OpacityAnimation delay={delay}>
          <Link to={link}>
            <span>{title}</span>
            <span style={{color}}>.</span>
          </Link>
        </OpacityAnimation>
      </div>
    );
  }
}

export default WorkItem;
