import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'; // Importing the CSS file for styling

// Importing the components for each hook example
import UseStateExample from './UseStateExample';
import UseEffectExample from './UseEffectExample';
import UseContextExample from './UseContextExample';
import UseReducerExample from './UseReducerExample';
import UseRefExample from './UseRefExample';
import UseMemoExample from './UseMemoExample';
import UseCallbackExample from './UseCallbackExample';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="title">React Hooks Examples</h1>
        <div className="button-container">
          {/* Each button links to a different route */}
          <Link to="/useState" className="button">useState</Link>
          <Link to="/useEffect" className="button">useEffect</Link>
          <Link to="/useContext" className="button">useContext</Link>
          <Link to="/useReducer" className="button">useReducer</Link>
          <Link to="/useRef" className="button">useRef</Link>
          <Link to="/useMemo" className="button">useMemo</Link>
          <Link to="/useCallback" className="button">useCallback</Link>
        </div>

        {/* Setting up routes for each example using Routes */}
        <Routes>
          <Route path="/useState" element={<UseStateExample />} />
          <Route path="/useEffect" element={<UseEffectExample />} />
          <Route path="/useContext" element={<UseContextExample />} />
          <Route path="/useReducer" element={<UseReducerExample />} />
          <Route path="/useRef" element={<UseRefExample />} />
          <Route path="/useMemo" element={<UseMemoExample />} />
          <Route path="/useCallback" element={<UseCallbackExample />} />
          {/* Optional: Add a default route for the home page */}
          <Route path="/" element={<h2 className="sub__title">Welcome! Click a hook example above.</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
