import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import image4 from './Assets/useReducer.png';

// Define the initial state
const initialState = { count: 0 };

// Reducer function to manage state transitions
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducerExample() {
  const [state, dispatch] = useReducer(reducer, initialState); // useReducer hook
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <div>
      <h2>useReducer Example</h2>
      <p>Current Count: {state.count}</p>
      <button className="glow-button" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button className="glow-button" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image4} alt="Description of image" className="styled-image image-container" />
    </div>
  );
}

export default UseReducerExample;
