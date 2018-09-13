import React, {PureComponent, Component} from 'react';
import PropTypes from 'prop-types';
import Loader from 'components/Loader';
import ScrollUpButton from 'components/ScrollUpButton';
import NextProject from 'components/Sections/NextProject';
import Footer from 'components/Footer';
import {hubDarkBlue, hubGreen} from 'styles/config';
import provideScrollPosition from 'react-provide-scroll-position';

import './index.styl';
import Header from './sections/Header';

class HubPage extends PureComponent {
  static propTypes = {
    scrollTop: PropTypes.number
  };

  static defaultProps = {
    scrollTop: 0
  };

  render() {
    const {scrollTop} = this.props;
    return (
      <div className="hub-page">
        <Loader colors={{light: hubGreen, dark: hubDarkBlue}} />
        <ScrollUpButton color={hubGreen} percentagesScrolled={scrollTop} />
        <Header />
        <NextProject
          name="LPMA"
          desc="Helping real estate principals achieve customer excellence."
          href="/lpma"
        />
        <Footer />
      </div>
    );
  }
}

const HubScroll = provideScrollPosition(HubPage);

class Hub extends Component {
  render() {
    return <HubScroll />;
  }
}

export default Hub;
