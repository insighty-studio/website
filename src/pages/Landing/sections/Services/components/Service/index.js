import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

import './index.styl';

class Service extends PureComponent {
	static propTypes = {
	  className: PropTypes.string,
	  title: PropTypes.string,
	  subtitle: PropTypes.string,
	  text: PropTypes.string,
	  left: PropTypes.bool,
	  icons: PropTypes.arrayOf(PropTypes.object)
	};

	static defaultProps = {
	  className: '',
	  title: '',
	  subtitle: '',
	  text: '',
	  left: false,
	  icons: null
	};

  renderIcons() {
    const {icons} = this.props;

    return (
      <div className="service-icons">
        {icons.map(({icon, title, animationDelay = 0}) => (
          <div className="service-icon hover-grow" key={title}>
            <span data-aos="fade-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-delay={animationDelay}
            >
              {icon}
            </span>
            <div className="icon-title no-user-select"
                 data-aos="fade-in"
                 data-aos-easing="ease-in-sine"
                 data-aos-delay={animationDelay + 300}
            >
              {title}
            </div>
          </div>
        ))}
      </div>
    );
  }

	render() {
	  const {
	    title, subtitle, text, left
	  } = this.props;

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
