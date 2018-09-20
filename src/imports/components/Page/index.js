import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from 'components/Header';
import Footer from 'components/Footer';

class Page extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    className: '',
    children: null,
  };

  render() {
    const {className, children} = this.props;

    return (
      <div className={classnames('page', className)}>
        <Header />

        {children}

        <Footer />
      </div>
    );
  }
}

export default Page;
