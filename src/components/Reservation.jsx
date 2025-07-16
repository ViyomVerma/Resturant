import React, { useState } from "react";
import './Reservation.css';

const ReservationForm= () =>{
    const[formData , setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        eventType:"",
        guests:"",
        date:"",
    });

    const [errors , setErrors] = useState({});

    const handleChange = (e) =>{
        const {name , value} = e.target;

        
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));

        setErrors((prev) => ({
        ...prev,
        [name]: "",
        }));        
    };
     
    const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};

    Object.keys(formData).forEach((field) => {
      if (!formData[field]) {
        tempErrors[field] = "Please fill out this field.";
      }
    });

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
    } else {
      alert("Form submitted successfully!");
      console.log(formData);
      // Submit form logic here
    }
    }

    return (
        <form className="reservation-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange} 
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-group">
                     <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleChange}
                     />
                    {errors.email && <p className="error">{errors.email}</p>}
                </div>
        </div>
                <div className="form-row">
                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange} 
                        />
                         {errors.phone && <p className="error">{errors.phone}</p>}
                    </div>
                    <div className="form-group">
                        <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        >
                            <option value="">-Type of event-</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Wedding">Wedding</option>
                            <option value="Corporate">Corporate</option>
                        </select>
                        {errors.eventType && <p className="error">{errors.eventType}</p>}
                    </div>
                </div>
             <div className="form-row">
        <div className="form-group">
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
          >
            <option value="">-Number of guests-</option>
            <option value="1-2">1-2</option>
            <option value="3-5">3-5</option>
            <option value="6+">6+</option>
          </select>
          {errors.guests && <p className="error">{errors.guests}</p>}
        </div>
        <div className="form-group date-icon">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          {errors.date && <p className="error">{errors.date}</p>}
        </div>
      </div>

      <button className="submit-btn" type="submit">SUBMIT</button>
        </form>
    )
};

export default ReservationForm;