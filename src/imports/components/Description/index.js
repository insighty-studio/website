import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Heading from 'components/Typography/Heading';
import Paragraph from 'components/Typography/Paragraph';
import './index.styl';
import './mobile/index.styl';

class Description extends PureComponent {
  static propTypes = {
    subtitle: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    page: PropTypes.string
  };

  static defaultProps = {
    subtitle: '',
    title: '',
    text: '',
    page: 'landing'
  };

  render() {
    const {
      title, subtitle, text, page
    } = this.props;

    return (
      <div className={classnames('service-description', page)}>
        <Heading className={page} subTitle={subtitle} title={title} />
        <Paragraph>
          {text}
        </Paragraph>
      </div>
    );
  }
}

export default Description;
