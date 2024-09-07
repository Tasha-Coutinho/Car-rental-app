import React from "react";
import "./luxury.css"
export const Luxury = () =>{
  return (
    <div className="main-contact">
   <div class="top-products1">
     {/* <!-- 1 --> */}

     <div class="prdct-price">
       <div class="products product1">
         <div class="products-img product-img1"></div>
       </div>
       <div class="Products-info">
         <div className="carname-btn">
         <p>Reliable Red</p>
         <a href=""><button className="Luxury-btn">Luxury</button></a>
         </div>
         <p class="links links2">$100 <br />/day</p>
       </div>
     </div>
     {/* <!-- 2 --> */}
     <div class="prdct-price">
       <div class="products product2">
         <div class="products-img product-img2"></div>
       </div>
       <div class="Products-info">
         <div className="carname-btn">
         <p className="">The Cruiser</p>
         <a href=""><button className="Luxury-btn">Luxury</button></a>
         </div>
         <p class="links links2">$120 <br />/day</p>
       </div>
     </div>

   

    
   </div>
{/* ............................................. */}
</div>

  );
};