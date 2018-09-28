/*eslint-disable*/
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {Component, Fragment} from 'react';
import classnames from 'classnames';
import SectionHeading from 'components/typography/SectionHeading';
import ClientFooter from 'components/Sections/ClientFooter';
import clients from 'data/clients';
import Swipeable from 'react-swipeable';
import {isMobile} from 'react-device-detect';

import {
  LeftBlackArrow,
  LeftColorArrow,
  RightBlackArrow,
  RightColorArrow
} from './icons';
import Dot from './components/Dot';

import './index.styl';
import './mobile/index.styl';

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
    const {currentElementIndex, activeAnimation} = this.state;

    if (activeAnimation !== '') return null;

    this.setState({activeAnimation: 'left-animation'});
    this.intervalAnimation(1400);

    if ((clients.length - 1) === currentElementIndex) {
      return this.intervalCurrentElement(0, 600);
    }

    return this.intervalCurrentElement(currentElementIndex + 1, 600);
  }

  slidePrev() {
    const {currentElementIndex, activeAnimation} = this.state;

    if (activeAnimation !== '') return null;

    this.setState({activeAnimation: 'right-animation'});
    this.intervalAnimation(1400);

    if (currentElementIndex === 0) {
      return this.intervalCurrentElement(clients.length - 1, 600);
    }

    return this.intervalCurrentElement(currentElementIndex - 1, 600);
  }

  renderPagination(data, currentElementIndex) {
    if (data.length <= 1) return null;
    return data.map((element, index) => (
      <Dot
        key={index}
        className={currentElementIndex === index ? 'current' : ''}
      />
    ));
  }

  renderAnimation(activeAnimation) {
    return (
      <div className={classnames('clients-animation', activeAnimation)}>
        <div className="light-layer" />
        <div className="dark-layer" />
      </div>
    );
  }

  renderMiddleContent() {
    const {currentElementIndex} = this.state;
    const {
      name, position, comment, href, page, photo, color
    } = clients[currentElementIndex];

    return (
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
    );
  }

  renderWebVersion() {
    const {currentElementIndex} = this.state;
    const {color} = clients[currentElementIndex];

    return (
      <Fragment>
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
        {this.renderMiddleContent()}
      </Fragment>
    );
  }

  renderMobileVersion() {
    const {currentElementIndex} = this.state;

    return (
      <Swipeable
        onSwipingLeft={() => this.slideNext()}
        onSwipingRight={() => this.slidePrev()}
      >
        {this.renderMiddleContent()}
        <div className="pagination">
          {this.renderPagination(clients, currentElementIndex)}
        </div>
      </Swipeable>
    );
  }

  render() {
    const {currentElementIndex, activeAnimation} = this.state;
    const {color, label} = clients[currentElementIndex];
    return (
      <div className="clients">
        <div className="background" style={{backgroundColor: color}} key={currentElementIndex} />
        <div className={classnames('content', activeAnimation)}>
          {isMobile ? this.renderMobileVersion() : this.renderWebVersion()}
          {/*{this.renderWebVersion()}*/}
          {activeAnimation && this.renderAnimation(activeAnimation, label)}
        </div>
      </div>
    );
  }
}

export default Clients;
