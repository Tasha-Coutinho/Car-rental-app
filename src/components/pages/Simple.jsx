import React from "react";
import "./simple.css"


export const Simple = () =>{
  return (
    <div className="simple-body"> 
 <div className="main-contact">
   <div class="top-products1">
     {/* <!-- 1 --> */}

     <div class="prdct-price">
       <div class="products product1">
         <div class="products-img product-img1"></div>
       </div>
       <div class="Products-info">
         <div className="carname-btn">
         <p>Modest Explorer</p>
         <a href=""><button className="simple-btn">Simple</button></a>
         </div>
         <p class="links links2">$60 <br />/day</p>
       </div>
     </div>
     {/* <!-- 2 --> */}
     <div class="prdct-price">
       <div class="products product2">
         <div class="products-img product-img2"></div>
       </div>
       <div class="Products-info">
         <div className="carname-btn">
         <p className="">Dreamfinder</p>
         <a href=""><button className="simple-btn">Simple</button></a>
         </div>
         <p class="links links2">$70 <br />/day</p>
       </div>
     </div>

   

    
   </div>
{/* ............................................. */}
</div>
    </div>
  );
};