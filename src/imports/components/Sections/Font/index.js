import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import SectionName from '../SectionName';

import './index.styl';

class FontSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, name, company, desc} = this.props;

    return (
      <div className={classnames('font-section', className)}>
        <div className="font-main-info">
          <div className="font-name">
            <div className="name">{name}</div>
            <div className="company"><span>by</span> {company}</div>
          </div>
          <div className="font-desc">
            {desc}
          </div>
        </div>
        <div className="font-types">
          <div className="font bold">
            <div className="font-size">24px <br />Bold</div>
            <div className="font-example">Aa</div>
          </div>
          <div className="font medium">
            <div className="font-size">32px <br />Medium</div>
            <div className="font-example">Aa</div>
          </div>
          <div className="font regular">
            <div className="font-size">48px <br />Regular</div>
            <div className="font-example">Aa</div>
          </div>
        </div>
        <SectionName name="Font" />
      </div>
    );
  }
}

export default FontSection;
