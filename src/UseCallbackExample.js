import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import image7 from './Assets/useCallback.png';

// Child component that uses a callback prop
const Counter = React.memo(({ increment }) => {
  console.log('Counter rendered');
  return <button className="glow-button" onClick={increment}>Increment</button>;
});

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  // Memoizing the increment function
  const increment = useCallback(() => {
    setCount((c) => c + 1); // Incrementing the count
  }, []); // Empty dependency array to keep the same function reference
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useCallback Example</h2>
      <p>Count: {count}</p>
      <Counter increment={increment} />
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image7} alt="Description of image" className="styled-image image-container" />
    </div>
  );
}

export default UseCallbackExample;
