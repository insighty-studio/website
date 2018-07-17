import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import Heading from 'components/Typography/Heading';
import Paragraph from 'components/Typography/Paragraph';

import './index.styl';

class Description extends PureComponent {
  static propTypes = {
		subtitle: PropTypes.string,
		title: PropTypes.string,
    text: PropTypes.string
  };

  static defaultProps = {
		subtitle: '',
		title: '',
    text: ''
  };

  render() {
    const {title, subtitle, text} = this.props;

    return (
      <div className="service-description">
        <Heading
          subTitle={subtitle}
          title={title}
        />
        <Paragraph>
          {text}
        </Paragraph>

        {/*<div className="service-title">*/}
          {/*<div className="title-line" />*/}
          {/*{title}*/}
        {/*</div>*/}
        {/*<div className="service-subtitle">*/}
          {/*{subtitle}*/}
        {/*</div>*/}
        {/*<div className="service-text">*/}
          {/*{text}*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default Description;
