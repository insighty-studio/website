/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {Component} from 'react';
import classnames from 'classnames';
import SectionHeading from 'components/Typography/SectionHeading';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';

import {
  LeftBlackArrow,
  LeftColorArrow,
  RightBlackArrow,
  RightColorArrow
} from './icons';
import './index.styl';

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentElementIndex: 0,
      activeAnimation: ''
    };
  }

  intervalCurrentElement(index, interval) {
    const intervalElement = setInterval(() => {
      this.setState({currentElementIndex: index});
      clearInterval(intervalElement);
    }, interval);
  }

  intervalAnimation(interval) {
    const intervalAnimation = setInterval(() => {
      this.setState({activeAnimation: ''});
      clearInterval(intervalAnimation);
    }, interval);
  }

  slideNext() {
    const {currentElementIndex} = this.state;

    this.setState({activeAnimation: 'left-animation'});
    this.intervalAnimation(1400);

    if ((clients.length - 1) === currentElementIndex) {
      return this.intervalCurrentElement(0, 600);
    }

    return this.intervalCurrentElement(currentElementIndex + 1, 600);
  }

  slidePrev() {
    const {currentElementIndex} = this.state;

    this.setState({activeAnimation: 'right-animation'});
    this.intervalAnimation(1400);

    if (currentElementIndex === 0) {
      return this.intervalCurrentElement(clients.length - 1, 600);
    }

    return this.intervalCurrentElement(currentElementIndex - 1, 600);
  }

  renderAnimation(activeAnimation) {
    return (
      <div className={classnames('clients-animation', activeAnimation)}>
        <div className="light-layer" />
        <div className="dark-layer" />
      </div>
    );
  }

  render() {
    const {currentElementIndex, activeAnimation} = this.state;
    const {
      name, position, comment, href, page, photo, color, label
    } = clients[currentElementIndex];
    return (
      <div className="clients">
        <div className="background" style={{backgroundColor: color}} key={currentElementIndex} />
        <div className={classnames('content', activeAnimation)}>
          <div
            className="left-arrow"
            onClick={() => this.slidePrev()}
          >
            <LeftBlackArrow />
            <div className="hidden-arrow right">
              <LeftColorArrow color={color} />
            </div>
          </div>
          <div
            className="right-arrow"
            onClick={() => this.slideNext()}
          >
            <RightBlackArrow />
            <div className="hidden-arrow left">
              <RightColorArrow color={color} />
            </div>
          </div>
          <div className="middle">
            <SectionHeading subTitle="What Our" title="Clients Say" />
            <ClientFooter
              name={name}
              position={position}
              comment={comment}
              href={href}
              page={page}
              photo={photo}
              color={color}
              key={currentElementIndex}
            />
          </div>
          {activeAnimation && this.renderAnimation(activeAnimation, label)}
        </div>
      </div>
    );
  }
}

export default Clients;
