
import React from 'react';
import Home from './modules/Home/Home';
import About from './modules/About/About';
import Projects from './modules/Projects/Projects';
import Contact from './modules/Contact/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
export default App;
