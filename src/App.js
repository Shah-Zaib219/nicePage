import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './about/About'; // Import your Contact component (create a Contact.js file)
import Contact from './Contact/Contact';

function App() {
  return (
    
 
      <>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/Home" exact element={<Home/>} />
          {/* Add more routes as needed */}
        </Routes>
      </>
  
  );
}

export default App;
