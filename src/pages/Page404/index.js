import React, {PureComponent} from 'react';
import Heading from 'components/Typography/Heading';
import Paragraph from 'components/Typography/Paragraph';
import Button from 'components/Button';
import {LetsGoHomeButtonIcon} from 'icons';

import './index.styl';
import Illustration from './Illustration';

class Page404 extends PureComponent {
  render() {
    return (
      <div className="page-404">
        <div className="content">
          <div className="content-info">
            <Heading subTitle="404" title="Page not found" />
            <Paragraph>
              You’re either really bad at using the internet, or we’re really bad at making websites.
              Either way, this wasn’t supposed to happen.
            </Paragraph>
            <div className="lets-go-home-button">
              <Button title="let’s go home" href="https://insighty.studio/">
                <LetsGoHomeButtonIcon />
              </Button>
            </div>
          </div>
          <Illustration />
        </div>
        <div className="mobile-bg" />
      </div>
    );
  }
}

export default Page404;
