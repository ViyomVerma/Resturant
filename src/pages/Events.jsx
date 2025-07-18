import React from 'react';
import { useEffect , useRef } from 'react';
import './Events.css';

const Events = () => {

  const instaRef = useRef(null);

  const eventTypes=[
    { image : "./about-image/rest23.png" , event: "Birthday Parties"},
    { image : "./about-image/rest23.png" , event: "Anniversaries"},
    { image : "./about-image/rest23.png" , event: "Corporate Dinner"},
    { image : "./about-image/rest23.png" , event: "Festive Events"},
    { image : "./about-image/rest23.png" , event: "Family Gathering"},
    { image : "./about-image/rest23.png" , event: "Private Dining"},
  ];

    useEffect(() => {
      const interval = setInterval(() => {
        if(instaRef.current){
           const container = instaRef.current;
          instaRef.current.scrollLeft +=1;
          //reset scroll if it reached to end
          if(container.scrollLeft + container.clientWidth >= container.scrollWidth)
          {
             container.scrollTo({ left: 0, behavior: 'auto' });
          }
        }
      }, 5);
  
      return() => clearInterval(interval); //cleanup on unmount
    },[]);
  return (
    <div className="events-page">
      <div className="events-hero">
        <h1 className='heading'> Events at Our Restaurant</h1>
        <p className='head-para'>Celebrate every occasion with unforgettable food, ambiance, and service.</p>
         <h2>🎉 What We Host</h2>
      </div>

      <div className="event-types" ref={instaRef}>
        {eventTypes.map((item) => (
          <div className="event-card">
            <img src={item.image} className='event-image'></img>
            <p>{item.event}</p>
          </div>
        ))};
      </div>

      <div className="event-services">
        <h2>🍷 Our Services Include</h2>
        <ul>
          <li>Dedicated event coordinator</li>
          <li>Customizable food & beverage packages</li>
          <li>Themed decor & music</li>
          <li>Indoor & outdoor seating options</li>
          <li>Professional photography (on request)</li>
          <li>Parking & valet services</li>
        </ul>
      </div>

      <div className="event-testimonials">
        <h2>📸 Memorable Moments</h2>
        <blockquote>
          “We hosted our baby shower here and the experience was beyond perfect! From food to service — everything was flawless.”  
          <br />— Riya Sharma
        </blockquote>
        <blockquote>
          “Thank you for making our anniversary dinner so magical. Loved the ambiance and attention to detail.”  
          <br />— Ankit & Neha
        </blockquote>
      </div>

      <div className="event-contact">
        <h2>📅 Plan Your Event With Us</h2>
        <p>Fill out our reservation form or call us directly to start planning your event.</p>
        <p>📍 Visit Us: 123 Gourmet Street, Delhi</p>
        <p>📞 Call: +91 98765 43210</p>
        <p>📧 Email: contact@gourmetgarden.com</p>
      </div>
    </div>
  );
};

export default Events;
