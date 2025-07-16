import React from 'react'
import "./Staff.css";

const Staff = () => {
  return (
    <div className="home3-container">
          <div >
            <img src={"home-image/rest6.jpg"} className="staff-img"></img>
          </div>
          <div className="staff-text">
            <h1 className='staff-name'>Aarav Virani</h1>
            <p className='staff-bio'>At the heart of our kitchen is Aarav Virani — a culinary artisan dedicated to bringing timeless Indian flavors to life. With a deep respect for tradition and a flair for innovation, Aarav curates every dish to evoke warmth, nostalgia, and delight. Whether you’re here for a soulful daal, an aromatic biryani, or a delicate mithai, every experience is crafted to feel personal — like a memory from home, served with elegance.</p>
          </div>
          <div className="text-img">
            <img src={"home-image/rest2.png"} className="text-img"></img>
          </div>
      </div>
  )
}

export default Staff;