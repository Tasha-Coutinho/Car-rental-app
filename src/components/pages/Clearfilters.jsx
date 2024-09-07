//Clearfilters.jsx

import React from "react";
import "./clearfilters.css";
import { Link } from "react-router-dom";

const Clearfilters = () => {
  return (
    <div>
      <div className="main-contact" id="Dining">
        <div className="top-products">
          <div className="top-products1">
            {/* <!-- 1 --> */}
            <Link to="/mobile">
              <div className="prdct-price">
                <div className="products product1">
                  <div className="products-img product-img1"></div>
                </div>
                <div className="Products-info">
                  <div className="carname-btn">
                    <p>Modest Explorer</p>
                    <button className="simple-btn">Simple</button>
                  </div>
                  <p className="links links2">$60 <br />/day</p>
                </div>
              </div>
            </Link>
            {/* <!-- 2 --> */}
            <Link to="/mobile">
              <div className="prdct-price">
                <div className="products product2">
                  <div className="products-img product-img2"></div>
                </div>
                <div className="Products-info">
                  <div className="carname-btn">
                    <p className="">Beach Bum</p>
                    <button className="Rugged-btn">Rugged</button>
                  </div>
                  <p className="links links2">$80 <br />/day</p>
                </div>
              </div>
            </Link>

            {/* <!-- 3 --> */}
            <Link to="/mobile">
              <div className="prdct-price extra">
                <div className="products product2b extra">
                  <div className="products-img product-img2b extra"></div>
                </div>
                <div className="Products-info extra">
                  <div className="carname-btn">
                    <p>Green Wonder</p>
                    <button className="Luxury-btn">Luxury</button>
                  </div>
                  <p className="links links2">$70 <br />/day</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="top-products2">
            {/* <!-- 4 --> */}
            <Link to="/mobile">
              <div className="prdct-price">
                <div className="products product3">
                  <div className="products-img product-img3"></div>
                </div>
                <div className="Products-info">
                  <div className="carname-btn">
                    <p>Reliable Red</p>
                    <button className="Luxury-btn">Luxury</button>
                  </div>
                  <p className="links links2">$100 <br />/day</p>
                </div>
              </div>
            </Link>

            {/* <!-- 5 --> */}
            <Link to="/mobile">
              <div className="prdct-price">
                <div className="products product4">
                  <div className="products-img product-img4"></div>
                </div>
                <div className="Products-info">
                  <div className="carname-btn">
                    <p>Dreamfinder</p>
                    <button className="simple-btn">Simple</button>
                  </div>
                  <p className="links links2">$65 <br />/day</p>
                </div>
              </div>
            </Link>

            {/* <!-- 6 --> */}
            <Link to="/mobile">
              <div className="prdct-price extra">
                <div className="products product4b extra">
                  <div className="products-img product-img4b extra"></div>
                </div>
                <div className="Products-info product4b-price extra">
                  <div className="carname-btn">
                    <p>The Cruiser</p>
                    <button className="simple-btn">Luxury</button>
                  </div>
                  <p className="links links2">$120 <br />/day</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="bottom-products"></div>
      </div>
    </div>
  );
};

export default Clearfilters;

