import React from "react";
import PropTypes from "prop-types";

function CarListing(props) {
    return (<div className="col-md-4 grid_listing">
            <div className="product-listing-m gray-bg">
              <div className="product-listing-img"> <a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">
              <img src="./featured-img-1.jpg" className="img-responsive" alt="image" /> </a>
                <div className="label_icon">New</div>
                <div className="compare_item">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="compare10" />
                    <label for="compare10">Compare</label>
                  </div>
                </div>
              </div>
              <div className="product-listing-content">
                <h5><a href="http://themes.webmasterdriver.net/carforyou/demo/listing-grid.html#">Mazda CX-5 SX, V6, ABS, Sunroof </a></h5>
                <p className="list-price">$89,000</p>
                <div className="car-location"><span><i className="fa fa-map-marker" aria-hidden="true"></i> Colorado, USA</span></div>
                <ul className="features_list">
                  <li><i className="fa fa-road" aria-hidden="true"></i>35,000 km</li>
                  <li><i className="fa fa-tachometer" aria-hidden="true"></i>30.000 miles</li>
                  <li><i className="fa fa-calendar" aria-hidden="true"></i>2005 model</li>
                  <li><i className="fa fa-car" aria-hidden="true"></i>Diesel</li>
                </ul>
              </div>
            </div>
          </div>);
}

export default CarListing;

