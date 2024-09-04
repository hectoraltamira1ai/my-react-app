import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image2 from './Assets/useEffect.png';

function UseEffectExample() {
  const [count, setCount] = useState(0);

  // useEffect hook to log count changes
  useEffect(() => {
    console.log(`Count has changed to: ${count}`);
  }, [count]); // Runs effect when count changes
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useEffect Example</h2>
      <p>Current Count: {count}</p>
      <button className="glow-button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="glow-button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image2} alt="Description of image" className="styled-image" />
    </div>
  );
}
function ImageContainer() {
  return (
    <div className="image-container">
      <img src={image2} alt="Description of image" className="styled-image" />
    </div>
  );
}

export default UseEffectExample;
