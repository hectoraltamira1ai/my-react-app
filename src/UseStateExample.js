import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from './Assets/useState.png';

function UseStateExample() {
  const [count, setCount] = useState(0); // Initializes count to 0
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useState Example</h2>
      <p>Current Count: {count}</p>
      <button className="glow-button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="glow-button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image1} alt="Description of image" className="styled-image image-container" />
    </div>
  );
}

export default UseStateExample;

