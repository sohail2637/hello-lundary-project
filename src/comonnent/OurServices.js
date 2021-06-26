import { Link } from "react-router-dom";
import React from "react";

export default function OurServices() {
  return (
    <div>
      <>
        <div className="section services-section">
          <div className="container" id="servicesbox">
            <div className="section-title">
              <Link to="/postorder">
                <button
                  style={{
                    background: "#92bd3e",
                    fontSize: "36px",
                    lineHeight: "40px",
                    borderRadius: "10px",
                  }}
                >
                  Place Order
                </button>
              </Link>
            </div>
            <div className="row text-center margin-t4">
              <div className="col-md-4 margin-t4" id="laundaryservices">
                <div className="service-item">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-3.png"
                      alt
                    />
                  </div>
                  <h3>Laundry Services</h3>
                  <p>
                    We quickly collect, smartly clean, neatly pack and timely
                    deliver your laundry to make the task easier for you through
                    the assistance of expert launderettes.
                  </p>
                </div>
              </div>
              <div className="col-md-4 margin-t4">
                <div className="service-item" id="drayservices">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-1.png"
                      alt
                    />
                  </div>
                  <h3>Dry Cleaning Services</h3>
                  <p>
                    Get your clothes just like new with our quick, perfect and
                    high-quality dry cleaning service. We provide reliable,
                    affordable and timely dry cleaning delivery.
                  </p>
                </div>
              </div>
              <div className="col-md-4 margin-t4">
                <div className="service-item" id="ironservices">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-2.png"
                      alt
                    />
                  </div>
                  <h3>Ironing Service</h3>
                  <p>
                    Neatly ironed clothes enhance your personality. Our steam
                    ironing services are provided by professionals from the
                    laundry industry.
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-center margin-t4">
              <div className="col-md-4 margin-t4">
                <div className="service-item">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-2.png"
                      alt
                    />
                  </div>
                  <h3>Wash &amp; Iron</h3>
                  <p>
                    We offer cost-effective and high quality wash and ironing
                    service in London &amp; Essex with free pickup and next day
                    delivery.
                  </p>
                </div>
              </div>
              <div className="col-md-4 margin-t4">
                <div className="service-item">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-4.png"
                      alt
                    />
                  </div>
                  <h3>Shoe Repair Service</h3>
                  <p>
                    With premium quality products and exclusive procedure, our
                    boots &amp; shoes repairing shop is aimed at lending you a
                    refined appeal.
                  </p>
                </div>
              </div>
              <div className="col-md-4 margin-t4">
                <div className="service-item">
                  <div className="service-icon">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/service-img-5.png"
                      alt
                    />
                  </div>
                  <h3>Alteration Service</h3>
                  <p>
                    Perfect fitting of clothes augments their overall appeal.
                    This defines our exclusive clothing alterations and repair
                    services intended to glorify your looks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section packages-section">
          <div className="container">
            <div className="section-title">
              <h2 className="title-underline">
                On demand laundry, dry cleaning &amp; ironing service
              </h2>
            </div>
            <div className="row margin-t5">
              <div className="col-md-3 margin-t4 mt-md-4">
                <div className="package-item">
                  <div className="item-img">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/shirt-1.png"
                      alt
                    />
                  </div>
                  <h3>Shirt</h3>
                  <h6 className="quantity">2 shirts (Man)</h6>
                  <p className="price">RS:&nbsp; 140</p>
                  <p className="discount"> RS:&nbsp;20</p>
                </div>
              </div>
              <div className="col-md-3 margin-t4 mt-md-4">
                <div className="package-item">
                  <div className="item-img">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/shirt-2.png"
                      alt
                    />
                  </div>
                  <h3>Two Suits</h3>
                  <h6 className="quantity">Jacket &amp; Trouser</h6>
                  <p className="price">RS:&nbsp; 200</p>
                  <p className="discount">RS:&nbsp;35</p>
                </div>
              </div>
              <div className="col-md-3 margin-t4 mt-md-4">
                <div className="package-item">
                  <div className="item-img">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/shirt-3.png"
                      alt
                    />
                  </div>
                  <h3>Knightwere</h3>
                  <h6 className="quantity">3 Jumpers</h6>
                  <p className="price">RS:&nbsp;150</p>
                  <p className="discount">RS:&nbsp;15</p>
                </div>
              </div>
              <div className="col-md-3 margin-t4 mt-md-4">
                <div className="package-item">
                  <div className="item-img">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/shirt-4.png"
                      alt
                    />
                  </div>
                  <h3>Double Bed</h3>
                  <h6 className="quantity">D cover, sheet</h6>
                  <p className="price">RS:&nbsp;100</p>
                  <p className="discount">RS:&nbsp;10</p>
                </div>
              </div>
              <div className="col-md-12 margin-t4 text-center"></div>
            </div>
          </div>
        </div>
        <div className="section easy-and-quick-section">
          <div className="container">
            <div className="section-title">
              <h2 className="title-underline">On Demand Laundry Apps</h2>
            </div>
            <div className="row margin-t5 row-flex">
              <div className="col-md-6">
                <div className="mobil-img">
                  <img
                    src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/mobile-new.png"
                    alt="Mobile Image"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <h3>Our Mobile App view</h3>
                <ul className="feature-list">
                  <li>
                    <span>
                      <i className="fas fa-check" />
                    </span>
                    Free Same-day collection
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check" />
                    </span>
                    Delivery in less then 24 hours
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-check" />
                    </span>
                    Standard wash for just Rs:&nbsp;250
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
