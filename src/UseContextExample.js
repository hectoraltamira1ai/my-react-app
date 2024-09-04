import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image3 from './Assets/useContext.png';

// Create a Context for the theme
const ThemeContext = createContext();

function UseContextExample() {
  const [theme, setTheme] = useState('light'); // State to manage theme
  const navigate = useNavigate(); // Hook to navigate

  const handleReturn = () => {
    navigate('/'); // Navigate to the main page
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <h2>useContext Example</h2>
      <p>Current Theme: {theme}</p>
      <button className="glow-button" onClick={() => setTheme('light')}>Light Theme</button>
      <button className="glow-button" onClick={() => setTheme('dark')}>Dark Theme</button>
      <button className="glow-button input-button" onClick={handleReturn}>Return to Main Page</button> {/* Button to return */}
      <ThemeDisplay />
      <br></br>
      {/* Add the image below the buttons */}
      <img src={image3} alt="Description of image" className="styled-image" />
    </ThemeContext.Provider>
  );
}

// A child component that consumes the context
function ThemeDisplay() {
  const { theme } = useContext(ThemeContext); // Accessing the context value
  return <p>The selected theme is: {theme}</p>;
}
function ImageContainer() {
  return (
    <div className="image-container">
      <img src={image3} alt="Description of image" className="styled-image" />
    </div>
  );
}

export default UseContextExample;
