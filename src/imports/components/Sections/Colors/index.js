import React, {PureComponent} from 'react';
import PropTypes from "prop-types";
import classnames from 'classnames';

import './index.styl';

class ColorsSection extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    colors: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      color: PropTypes.string,
    })).isRequired
  };

  static defaultProps = {
    className: '',
    colors: {}
  };

  render() {
    const {className, colors} = this.props;

    return (
      <div className={classnames('colors-section', className)}>
        <div className="colors">
          {colors.map(({name, color}) => (
            <div key={color} className="color">
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
