// ButtonComponent.js

import React from 'react';

const Button = ({ onClick, isTextVisible }) => {
  return (
    <button onClick={onClick}>
      {isTextVisible ? 'Hide text' : 'Show text'}
    </button>
  );
};

export default Button;



