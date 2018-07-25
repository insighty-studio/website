import {PureComponent} from 'react';
import PropTypes from 'prop-types';

class DelayMount extends PureComponent {
  static propTypes = {
    render: PropTypes.bool.isRequired,
    children: PropTypes.any,
    transitionEnterDelay: PropTypes.number.isRequired,
    transitionLeaveTimeout: PropTypes.number.isRequired
  };

  static defaultProps = {
    children: null
  };

  constructor(props) {
    super(props);
    this.state = {
      shouldMount: false
    };
  }


  componentDidMount() {
    const {transitionEnterDelay, render} = this.props;
    if (render) {
      this.setEnterTimeout(transitionEnterDelay);
    }
  }

  componentWillUpdate(nextProps) {
    const {render, transitionEnterDelay, transitionLeaveTimeout} = nextProps;
    if (render) {
      this.setEnterTimeout(transitionEnterDelay);
    } else {
      this.setLeaveTimeout(transitionLeaveTimeout);
    }
  }

  componentWillUnmount() {
    this.clearEnterTimeout();
    this.clearLeaveTimeout();
  }

  setEnterTimeout(transitionEnterDelay) {
    if (this.enterTimeout) {
      return;
    }

    this.clearLeaveTimeout();

    this.enterTimeout = window.setTimeout(() => {
      this.setState({shouldMount: true});
      this.clearEnterTimeout();
    }, transitionEnterDelay);
  }

  setLeaveTimeout(transitionLeaveTimeout) {
    if (this.leaveTimeout) {
      return;
    }

    this.clearEnterTimeout();

    this.leaveTimeout = window.setTimeout(() => {
      this.setState({shouldMount: false});
      this.clearLeaveTimeout();
    }, transitionLeaveTimeout);
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
    const {children} = this.props;
    const {shouldMount} = this.state;
    return shouldMount ? children : null;
  }
}

export default DelayMount;
