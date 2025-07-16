import React from 'react';
import './About.css';
import Staff from '../components/staff';

const About = () => {
  return (
    <div className="about-page">
      <div className="about1-container">
        <div className="about-story">
          <h1>Our Story</h1>
          <p>
            Founded in 1997, <strong>The Gourmet Garden</strong> started as a cozy family eatery
            with a passion for reviving traditional Indian recipes. Over the years, it has become a
            beloved destination for food lovers seeking authentic flavors served with elegance.
          </p>
          <button className="view-more">VIEW MORE</button>
        </div>

        <div className="about-img">
          <img src={"about-image/rest17.png"} className="story-image"/>
        </div>
      </div>
      <div className="about-chef">
       <Staff />
         
      </div>

      <div className="about-values">
  <h2>Our Philosophy</h2>
  <ul>
    <li>🍃 Fresh, locally sourced ingredients</li>
    <li>✨ Authentic Indian flavors with modern fusion</li>
    <li>♻️ Sustainable kitchen practices</li>
    <li>💛 Customer-first hospitality</li>
  </ul>
</div>

<div className="about-timeline">
  <h2>Milestones</h2>
  <ul className="timeline">
    <li><span>1997</span> – The Gourmet Garden was founded</li>
    <li><span>2005</span> – Expanded to a second location</li>
    <li><span>2015</span> – Featured in “Top 10 Hidden Gems of Delhi”</li>
    <li><span>2024</span> – 5-star Google rating with 10,000+ happy customers</li>
  </ul>
</div>


      <div className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="about-image/rest15.png" alt="Chef" />
            <p>Chef Aarav</p>
          </div>
          <div className="team-member">
            <img src="about-image/rest16.png" alt="Manager" />
            <p>Manager Priya</p>
          </div>
          <div className="team-member">
            <img src="home-image/rest6.jpg" alt="Head Server" />
            <p>Server Rohan</p>
          </div>
        </div>
      </div>

      <div className="about-testimonials">
        <h2>What Our Guests Say</h2>
        <blockquote>
          “Each bite was better than the last! The chef clearly knows how to blend ingredients
          beautifully.” – Rishabh Mehta
        </blockquote>
        <blockquote>
          “Absolutely delightful! The presentation was stunning. Will definitely return soon.”
          – Sneha Sharma
        </blockquote>
      </div>

      <div className="about-cta">
        <h2>Visit Us Today</h2>
        <p>Join us and experience the warmth of Indian tradition with a modern twist.</p>
        <a href="/menu" className="about-btn">Explore Our Menu</a>
      </div>
    </div>
  );
};

export default About;
