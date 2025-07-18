import React from 'react';
import './About.css';
import Staff from '../components/staff';
import Testimonial from '../components/Testimonial';
import Home from './Home';
import { Link } from 'react-router-dom';
const About = () => {
  const teamdata=[
    { restchef:"about-image/rest15.png", designation:"Chef" , name:"Chef Aarav"},
    { restchef:"about-image/rest20.png", designation:"Chef",name:"Chef Sneha" },
    { restchef:"about-image/rest16.png", designation:"Chef" ,name:"Chef Nihal" },
    { restchef:"about-image/rest20.png", designation:"Chef" ,name:"Chef Deepika" },
  ];
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
          <Link to="/Events" className="view-more">VIEW MORE</Link>
        </div>

        <div className="about-img">
          <img src={"about-image/rest17.png"} className="story-image"/>
        </div>
      </div>
      <div className="about-chef">
       <Staff />
         
      </div>


      <div className="about-team">
        <p className='team'>Meet the Team</p>
        <div className="team-grid">
          {teamdata.map((item) =>(
            <div className="team-member">
              <img src={item.restchef} className='restchef' ></img>
              <p className='chef-name'>{item.name}</p>
            </div>
          ) )};
        </div>
      </div>

      <div className="home6-container">
          <Testimonial />

      </div>

      <div className="about-cta">
        <img src='./about-image/rest18.png' className='visit-img'></img>
        <div className="visit-text">
          <h2 className='visit-head'>Visit Us Today</h2>
          <p>Join us and experience the warmth of Indian tradition with a modern twist.</p>
          <Link to="/menu" className="home-btn">VIEW ALL MENU</Link>
      </div>
        </div>
    </div>
  );
};

export default About;
