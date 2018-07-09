import {PureComponent} from 'react';
import PropTypes from 'prop-types';

class DelayMount extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      shouldMount: false
    };
  }

  componentDidMount() {
    if (this.props.render) {
      this.setEnterTimeout(this.props);
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.render) {
      this.setEnterTimeout(nextProps);
    } else {
      this.setLeaveTimeout(nextProps);
    }
  }

  componentWillUnmount() {
    this.clearEnterTimeout();
    this.clearLeaveTimeout();
  }

  setEnterTimeout(props) {
    if (this.enterTimeout) {
      return;
    }

    this.clearLeaveTimeout();

    this.enterTimeout = window.setTimeout(() => {
      this.setState({shouldMount: true});
      this.clearEnterTimeout();
    }, props.transitionEnterDelay);
  }

  setLeaveTimeout(props) {
    if (this.leaveTimeout) {
      return;
    }

    this.clearEnterTimeout();

    this.leaveTimeout = window.setTimeout(() => {
      this.setState({shouldMount: false});
      this.clearLeaveTimeout();
    }, props.transitionLeaveTimeout);
  }

  clearEnterTimeout() {
    if (this.enterTimeout) {
      window.clearTimeout(this.enterTimeout);
      this.enterTimeout = null;
    }
  }

  clearLeaveTimeout() {
    if (this.leaveTimeout) {
      window.clearTimeout(this.leaveTimeout);
      this.leaveTimeout = null;
    }
  }

  render() {
    return this.state.shouldMount ? this.props.children : null;
  }
}

DelayMount.defaultProps = {
  render: true,
  transitionEnterDelay: 0,
  transitionLeaveTimeout: 0
};

DelayMount.propTypes = {
  render: PropTypes.bool.isRequired,
  children: PropTypes.any,
  transitionEnterDelay: PropTypes.number.isRequired,
  transitionLeaveTimeout: PropTypes.number.isRequired
};

export default DelayMount;
