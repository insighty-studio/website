import React, {Component} from 'react';

import './index.styl';

class TextArea extends Component {
  render() {
    return (
      <div className="form-text-area">
        <textarea cols="30" rows="10" />
      </div>
    );
  }
}

export default TextArea;
