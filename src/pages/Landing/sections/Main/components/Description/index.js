import React from 'react';
import Typist from 'react-typist';

import './description.styl';

const Description = ({title, text}) => (
  <div className="description">
    <Typist avgTypingDelay={40} cursor={{hideWhenDone: true}}>
      <span>{title}</span>
      {text}
    </Typist>
  </div>
);

export default Description;
