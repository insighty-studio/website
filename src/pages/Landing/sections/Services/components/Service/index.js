import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Description from './Description';

import './index.styl';

class Service extends PureComponent {
	static propTypes = {
		subtitle: PropTypes.string,
		title: PropTypes.string,
	  text: PropTypes.string,
	  left: PropTypes.bool,
	  icons: PropTypes.arrayOf(PropTypes.object)
	};

	static defaultProps = {
		subtitle: '',
		title: '',
	  text: '',
	  left: false,
	  icons: null
	};

  renderIcons() {
    return (
      <div className="service-icons">
        {this.props.icons.map(({icon, title, animationDelay = 0}) => (
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
					subtitle={subtitle}
					title={title}
					text={text}
				/>
        {!left && this.renderIcons()}
      </div>
	  );
	}
}

export default Service;
