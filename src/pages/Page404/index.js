import React, {PureComponent} from 'react';
import {Logo} from 'icons';
import Loader from 'components/Loader';
import NavigationBar from 'components/NavigationBar';
import {Heading, Paragraph} from 'components/Typography';
import Button from 'components/interactions/AnimatedButton';
import {darkBlue, blue} from 'styles/config';

import {LetsGoHomeButtonIcon} from './icons';
import './index.styl';
import './mobile/index.styl';

class Page404 extends PureComponent {
  render() {
    return (
      <div className="page-404">
        <Loader colors={{light: blue, dark: darkBlue}} />
        <NavigationBar logoIcon={<Logo blue />} />
        <div className="content">
          <div className="info">
            <Heading subTitle="404" title="Page not found" />
            <Paragraph>
              You’re either really good at using the internet, or we’re really bad at making websites.
              Either way, this wasn’t supposed to happen.
            </Paragraph>
            <div className="buttons">
              <Button
                className="home-button"
                title="Let’s go home"
                href="/"
              >
                <LetsGoHomeButtonIcon />
              </Button>
            </div>
            <div className="illustration" />
          </div>
        </div>
      </div>
    );
  }
}

export default Page404;
