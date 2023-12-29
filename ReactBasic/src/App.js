// src/App.js
import React, { useState } from 'react';
import Button from './Components/Button';
import Text from './Components/Text';
import Image from './Components/Image';
import NavBar from './Components/NavBar';
import './App.css';



const App = () => {
  const [isTextVisible, setIsTextVisible] = useState(false);

  const handleButtonClick = () => {
    setIsTextVisible(!isTextVisible);
  };

  return (
    <div>
      <NavBar />
         <div className="row">
            <div className="column">
              <Button
                onClick={handleButtonClick}
               isTextVisible={isTextVisible}
              />
           </div>
           <div className="column">
             <Text isTextVisible={isTextVisible} />
           </div>
           <div className="column">
           <Image />
            </div>
         </div>
   </div>
 
  );
};


export default App;

