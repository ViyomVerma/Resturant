import React, { useState , useEffect } from 'react';
import './About.css';
import CategoryNavbar from "../components/categoryNavbar";
import Resturant from "../components/Resturant";

const Menu = () => {
  const [category, setCategory] = useState("BREAKFAST");

  const menuData=[
    { tag: "01", dish: "Maggie", image: "assets/maggie.png", category: "BREAKFAST" },
    { tag: "02", dish: "Choley Bhature", image: "assets/choley.png", category: "BREAKFAST" },
    { tag: "03", dish: "Vada Pav", image: "assets/vada_pav.png", category: "BREAKFAST" },
    { tag: "04", dish: "Idli Sambar", image: "assets/idli_sambar.png", category: "BREAKFAST" },
    { tag: "05", dish: "Masala Dosa", image: "assets/dosa.png", category: "BREAKFAST" },
    { tag: "06", dish: "Raj Kachori", image: "assets/raj.png", category: "LUNCH" },
    { tag: "07", dish: "Choley Kulche", image:"assets/kulche.png", category: "LUNCH" },
    { tag: "08", dish: "Aloo Parantha", image: "assets/aloo.png", category: "LUNCH" },
    { tag: "09", dish: "Daal Vada", image: "assets/daal_vada.png", category: "DINNER" },
    { tag: "10", dish: "Beverages", image:"assets/bevrages.png", category: "BEVERAGES" },
    { tag: "11", dish: "Beverages", image: "assets/bevrages.png", category: "BEVERAGES" },
    { tag: "12", dish: "Maggie", image: "assets/maggie.png", category: "BREAKFAST" },
    { tag: "13", dish: "Vada Pav", image: "assets/vada_pav.png", category: "BREAKFAST" },
    { tag: "14", dish: "Idli Sambar", image: "assets/idli_sambar.png", category: "BREAKFAST" },
    { tag: "15", dish: "Masala Dosa", image:"assets/dosa.png", category: "BREAKFAST" },
    { tag: "16", dish: "Raj Kachori", image: "assets/raj.png", category: "LUNCH" },
    { tag: "17", dish: "Choley Kulche", image: "assets/kulche.png", category: "LUNCH" },
    { tag: "18", dish: "Aloo Parantha", image: "assets/aloo.png", category: "LUNCH" },
    { tag: "19", dish: "Daal Vada", image: "assets/daal_vada.png", category: "DINNER" },
    { tag: "20", dish: "Gulab Jamun", image:"assets/gulab_jamun.png", category: "DESSERT" },
    { tag: "21", dish: "Beverages", image: "assets/bevrages", category: "BEVERAGES" },
    { tag: "22", dish: "Choley Bhature", image: "assets/choley.png", category: "BREAKFAST" },
    { tag: "23", dish: "Vada Pav", image:"assets/vada_pav.png", category: "BREAKFAST" },
    { tag: "24", dish: "Idli Sambar", image: "assets/idli_sambar.png", category: "BREAKFAST" },
    { tag: "25", dish: "Masala Dosa", image: "assets/dosa.png", category: "BREAKFAST" },
    { tag: "26", dish: "Raj Kachori", image:"assets/raj.png", category: "LUNCH" },
    { tag: "27", dish: "Choley Kulche", image: "assets/kulche.png", category: "LUNCH" },
    { tag: "28", dish: "Aloo Parantha", image:"assets/aloo.png", category: "LUNCH" },
    { tag: "29", dish: "Daal Vada", image: "assets/daal_vada.png", category: "DINNER" },
    { tag: "30", dish: "Gulab Jamun", image: "assets/gulab_jamun.png", category: "DESSERT" },
    { tag: "31", dish: "Beverages", image:"assets/bevrages.png", category: "BEVERAGES" },
    
  ];

  const filteredData = menuData.filter((item) => item.category === category);
  return (
    <div >
      <div>
        <CategoryNavbar setCategory={setCategory}/>
      </div>

     <div className="container">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Resturant
              category={item.category}
              tag={item.tag}
              dish={item.dish}
              image={item.image}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center", color: "white", padding:"30px"}}>No items in this category</h1>
        )}

     </div>
    </div>
   
  )
}

export default Menu;


