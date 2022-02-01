import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  return (
    <>
      <ThemeContext.Provider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}
export default App;
