import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <ul className="nav-ul">
        <li className='pages'><Link to="/">HOME</Link></li>
        <li className='pages'><Link to="/about">ABOUT</Link></li>
        <li className='pages'><Link to="/contact">CONTACT</Link></li>
        <li className='pages' ><Link to="/blogs">BLOGS</Link></li>
        <li className='pages'><Link to="/menu">MENU</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
