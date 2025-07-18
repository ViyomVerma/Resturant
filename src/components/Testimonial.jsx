import React from 'react'

const Testimonial = () => {
     const test = [
    {  quote:"A Hidden Gem!" , para :"The service was impeccable, and the food was out of this world. I could not get enough of their signature dish, which was bursting with flavor. The staff was friendly and attentive, making our evening truly special." , customer : "AARAV MALHOTRA" },
    {  quote:"Absolutely Delightful!" , para :"The flavors were rich and authentic, and the presentation was simply stunning. I especially loved the dessert, it was the perfect ending to a perfect meal. Will definitely be returning soon!" , customer : "SNEHA SHARMA" },
    {  quote:"Pure Culinary Magic!" , para :"Each bite was better than the last! The chef clearly knows how to blend ingredients beautifully. Add to that the charming atmosphere and attentive staff—it is a must-visit!" , customer : "RISHABH MEHTA" },
    {  quote:"Beyond Expectations!" , para :"I have dined at many places, but this one stood out. The attention to detail, the creativity of the menu, and the genuine hospitality made it one of the best nights we have had in a long time." , customer : "MEERA DESAI" },
  ];
  return (
    <>
    <div className="test-text">
            <h4 className='test-head'>Testimonials</h4>
            <p className='test-cust'>FROM OUR CUSTOMERS</p>
          </div>

          <div className="test-review">
                {test.map((item, index) => (
                  <div key={index} className="review-name">
                  <p className='test-quote'>{item.quote}</p>
                  <p className='test-para'>{item.para}</p>
                  <p className='test-customer'>{item.customer}</p>
                  </div>
                ))}
    </div>
     </>
  )
}

export default Testimonial;