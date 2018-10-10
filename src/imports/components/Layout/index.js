import React, {PureComponent} from 'react';
import classnames from 'classnames';

import './index.styl';

export class Aligner extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <div className={classnames('aligner', className)} {...rest}>{children}</div>
    );
  }
}

export class Section extends PureComponent {
  render() {
    const {children, className, ...rest} = this.props;
    return (
      <section className={classnames('section', className)} {...rest}>{children}</section>
    );
  }
}
