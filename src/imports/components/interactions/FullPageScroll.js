import React from 'react';
import PropTypes from 'prop-types';
import ReactFullpage from '@fullpage/react-fullpage';

export default class FullPageScroll extends React.Component {
  render() {
    const {children} = this.props;
    return (
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        navigation
        slidesNavigation
        controlArrows={false}
        render={() => (
          <ReactFullpage.Wrapper>
            {children}
          </ReactFullpage.Wrapper>
        )}
      />
    );
  }
}

FullPageScroll.propTypes = {
  children: PropTypes.node.isRequired,
};
