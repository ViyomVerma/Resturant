import React from 'react';

const CategoryNavbar = ({ setCategory }) => {
 
  return (
    <div className="category-navbar">
      <ul className='cat-ul'>
        <li onClick={() => setCategory("BREAKFAST")} className='menu-li'>BREAKFAST</li>
        <li onClick={() => setCategory("LUNCH")} className='menu-li'>LUNCH</li>
        <li onClick={() => setCategory("DINNER")} className='menu-li'>DINNER</li>
        <li onClick={() => setCategory("BEVERAGES")} className='menu-li'>BEVERAGES</li>
        <li onClick={() => setCategory("DESSERT")} className='menu-li'>DESSERT</li>
      </ul>
    </div>
  );
};

export default CategoryNavbar;
