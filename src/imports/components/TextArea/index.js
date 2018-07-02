import React, {PureComponent} from 'react';

import './styles/text-area.styl';

class TextArea extends PureComponent {
  render() {
    return (
      <div className="form-text-area">
        <textarea cols="30" rows="10" />
      </div>
    );
  }
}

export default TextArea;
