import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './Components/Home/Home';
// import NavBar from './Components/Navbar';
// import Particle from './Components/Home/Particle2';
import Signup from './Components/Signup/Signup';
import './Components/Style.css';
import './App.css';
import { Container } from 'react-bootstrap';

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container> 
      <Router>
      
      <div className="App" id={load ? 'no-scroll' : 'scroll'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />}   />
        </Routes>
      </div>
    </Router>
    
    </Container>
  );
}

export default App;
