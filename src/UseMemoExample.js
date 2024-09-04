import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image6 from './Assets/useMemo.png';

function UseMemoExample() {
  const [count, setCount] = useState(0); // State to trigger re-renders

  // Function to calculate factorial
  const calculateFactorial = (n) => {
    console.log('Calculating factorial...');
    return n <= 0 ? 1 : n * calculateFactorial(n - 1); // Recursive factorial calculation
  };

  // Memoized value that only recalculates when count changes
  const factorial = useMemo(() => {
    return calculateFactorial(count);
  }, [count]);
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useMemo Example</h2>
      <p>Count: {count}</p>
      <p>Factorial: {factorial}</p>
      <button className="glow-button" onClick={() => setCount(count + 1)}>Increment</button>
      <button className="glow-button" onClick={() => setCount(count - 1)}>Decrement</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image6} alt="Description of image" className="styled-image" />
    </div>
  );
}
function ImageContainer() {
  return (
    <div className="image-container">
      <img src={image6} alt="Description of image" className="styled-image" />
    </div>
  );
}

export default UseMemoExample;
