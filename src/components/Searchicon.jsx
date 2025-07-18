import React from 'react'
import { useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import CategoryNavbar from './categoryNavbar';

const Searchicon = ({setCategory}) => {

  const [showInput, setShowInput] = useState(false);
  const toggleInput = () => {
    setShowInput(prev => !prev); // toggle true/false
  };
  return (
   <div>
      <div className="search-bar">
        <IoMdSearch className="search-icon" onClick={toggleInput} />
        {showInput && (
          <input type="text" className={`search-dish ${showInput ? 'show' : ''}`} placeholder="Search here..." />
        )}
        <button className={`search-btn ${showInput ?'show' : ''}`}>Search</button>
      </div>
      <CategoryNavbar setCategory={setCategory} />
    </div>

  );
};

export default Searchicon