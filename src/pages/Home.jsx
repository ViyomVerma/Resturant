import React,{ useEffect , useRef , useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ReservationForm from '../components/Reservation';
import Menu from './Menu';
import './Home.css';
import Staff from '../components/staff';
import Testimonial from '../components/Testimonial';

const Home = () => {
 
const navigate=useNavigate();
const handleClick= (category) => {
  navigate(`/menu?category=${category}`);
};

const home4Ref = useRef(null);
const[isVisible , setIsVisible] = useState(false);

const instaRef = useRef(null);  // Ref for the insta container

  
  const rest = [
    {  image: "home-image/rest4.jpg" },
    {  image: "home-image/rest2.png" },
    {  image: "home-image/rest4.jpg" },
    {  image: "home-image/rest2.png" },
  ];

  const insta = [
    {  insta_img: "home-image/rest6.jpg" },
    {  insta_img: "home-image/rest7.jpg" },
    {  insta_img: "home-image/rest8.jpg" },
    {  insta_img: "home-image/rest9.jpg" },
    {  insta_img: "home-image/rest10.jpg" },
    {  insta_img: "home-image/rest11.jpg" },
    {  insta_img: "home-image/rest12.jpg" },
    {  insta_img: "home-image/rest6.jpg" },
    {  insta_img: "home-image/rest7.jpg" },
    {  insta_img: "home-image/rest8.jpg" },
    {  insta_img: "home-image/rest9.jpg" },
    {  insta_img: "home-image/rest10.jpg" },
    {  insta_img: "home-image/rest11.jpg" },
    {  insta_img: "home-image/rest12.jpg" },
  ];

  const footer=[
    { type:"LUNCH" , days:"MONDAY-SUNDAY" , time: "10:00 AM - 6:00 PM" },
     { type:"DINNER" , days:"MONDAY-SUNDAY" , time: "6:00 PM- 11 PM" },
      { type:"BUFFET" , days:"MONDAY-SUNDAY"}
  ];

  //animation
  useEffect(() => {
    const observer= new IntersectionObserver (  //API 
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold : 0.2 ,
      }     
    );

    if(home4Ref.current)
    {
      observer.observe(home4Ref.current)
    }

    return () => {
      if(home4Ref.current)
      {
        observer.unobserve(home4Ref.current);
      }
    };
  },[]); 
 
  //Auto scroll using useEfffect and useRef
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
    <div className="Home-page">
      <div className="home-container">
        {rest.map((item, index) => (
          <div key={index} className="cards">
            <img src={item.image} alt={`Rest ${item.tag}`} className='image_cont'/>
          </div>
        ))}
      </div>

      <div className="home2-container">
          <h1 className='text'>The Gourmet</h1>
          <h1 className='text'>Garden</h1>
          <h6 className='text1'>ESTD - 1997</h6>
      </div>
      
      <div className="home3-cont">
        <Staff/>
      </div>
      
        <div ref={home4Ref} className={`home4-container ${isVisible ? 'animate-up' : ''}`}>
            <ul className='home-ul'>
              <li onClick={() => handleClick("BREAKFAST")} className='home-li'>BREAKFAST</li>
              <li onClick={() => handleClick("LUNCH")} className='home-li'>LUNCH</li>
              <li onClick={() => handleClick("DINNER")} className='home-li'>DINNER</li>
              <li onClick={() => handleClick("BEVERAGES")} className='home-li'>BEVERAGES</li>
              <li onClick={() => handleClick("DESSERT")} className='home-li'>DESSERT</li>
            </ul>

             
            <Link to="/menu" className="home-btn">VIEW ALL MENU</Link>
        </div>
        
        <div className="home5-container">
         <div className="Insta-text">
          <p>Instagram</p>
         </div>
         <h4 className='insta-id'>@GRANDRESTURANT</h4>

          <div className="insta-container" ref={instaRef}>
                {insta.map((item, index) => (
                  <div key={index} className="insta-cards">
                    <img src={item.insta_img} alt={`Rest ${item.tag}`} className='insta_cont'/>
                  </div>
                ))}
          </div>
        </div>

        <div className="home6-container">
          <Testimonial/>

        </div>

        <div className="home7-container">
          <div className="form-img">
            <img src={"home-image/rest14.png"} className="table-img" />
          </div>
          <div className="customer-form">
            <p className='reserve'>Mark a Reservation</p>
             <ReservationForm />
          </div>
          {/* <div className="home_icon">
            <SocialIcons/>
          </div> */}
        
        </div>

        <div className="home8-container">
           {footer.map((item, index) => (
                  <div key={index} className="footer">
                  <p className='food-type'>{item.type}</p>
                  <p className='food-day'>{item.days}</p>
                  <p className='food-time'>{item.time}</p>
                  </div>
            ))}


        </div>
    </div>


  );
};

export default Home;
