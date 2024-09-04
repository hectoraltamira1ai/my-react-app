import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import image5 from './Assets/useRef.png';

function UseRefExample() {
  const inputRef = useRef(null); // Creating a ref for the input element

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus(); // Focusing the input element
    }
  };
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useRef Example</h2>
      <input ref={inputRef} type="text" placeholder="Click the button to focus" />
      <button className="glow-button ref-button" onClick={focusInput}>Focus Input</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image5} alt="Description of image" className="styled-image" />
    </div>
  );
}
function ImageContainer() {
  return (
    <div className="image-container">
      <img src={image5} alt="Description of image" className="styled-image" />
    </div>
  );
}

export default UseRefExample;
