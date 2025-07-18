import React , {useState} from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';

import Navbar from './components/MainNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Menu from './pages/Menu';


const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;

