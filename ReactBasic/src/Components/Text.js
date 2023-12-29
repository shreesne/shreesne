// TextComponent.js

import React from 'react';

const Text = ({ isTextVisible }) => {
  return isTextVisible ? <p>he button and text content will toggle between "Show text" and "Hide text" each time the button is clicked. 
    Adjust the styles and text content as needed for your specific design preferences.</p> : null;
};

export default Text;

