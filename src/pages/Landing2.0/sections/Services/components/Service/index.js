import React, {PureComponent} from 'react';

import Description from './Description';

import './service.styl';

class Service extends PureComponent {
  renderIcons() {
    const {icons} = this.props;

    return (
      <div className="service-icons">
        {icons.map(({icon, title}) => (
          <div className="service-icon" key={title}>
            {icon}
            <div className="icon-title">{title}</div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const {title, subtitle, text, left} = this.props;

    return (
      <div className="service">
        {left && this.renderIcons()}
        <Description
          title={title}
          subtitle={subtitle}
          text={text}
        />
        {!left && this.renderIcons()}
      </div>
    );
  }
}

export default Service;
