import React, {PureComponent} from 'react';
import classnames from 'classnames';

import './index.styl';

class ColorsSection extends PureComponent {
  render() {
    const {className, colors} = this.props;

    return (
      <div className={classnames('colors-section', className)}>
        <div className="colors">
          {colors.map(({name, color}) => (
            <div className="color">
              <div className="color-circle" style={{backgroundColor: color}} />
              <div className="color-info">
                <div>{name}</div>
                <div>{color}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorsSection;
