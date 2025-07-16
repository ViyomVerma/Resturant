import React from 'react';

const Resturant = (props) => {
  const order = () => {
    alert(`You have ordered: ${props.dish}!`);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="card-body">
          <span className="card-author subtle">{props.category}</span>
          <span className="card-number card-circle subtle">{props.tag}</span>
          <h2 className="card-title">{props.dish}</h2>
          <span className="card-description subtle">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </span>
        </div>

        <img src={props.image} className="card-media" alt={props.dish} />

        <div className="card-read">
          <button className="order-btn" onClick={order}>
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resturant;
