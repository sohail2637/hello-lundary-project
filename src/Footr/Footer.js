import React from 'react'

 const Footer=()=> {
    return (
      <div>
        <footer className="section main-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mobile-p-0">
                <div className="row">
                  <div className="col-md-3 col-xs-6 margin-t4">
                    <ul className="footer-menu">
                      <li className="menu-label">Quick Links</li>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/price">Pricing</a>
                      </li>
                      <li>
                        <a href="/faq">FAQs</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/privacy-policy">Privacy Policy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-xs-6 margin-t4">
                    <ul className="footer-menu">
                      <li className="menu-label">Services</li>
                      <li>
                        <a href="/#laundaryservices">Laundry Services</a>
                      </li>
                      <li>
                        <a href="/#drayservices">Dry Cleaning</a>
                      </li>
                      <li>
                        <a href="#ironservices">Wash &amp; Iron Services</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-xs-12 margin-t4">
                    <ul className="footer-menu">
                      <li className="menu-label">Commercial Services</li>
                      <li>Restaurant laundry Services</li>
                      <li>Specialist Items</li>
                      <li>Hotel bedding Services</li>
                      <li>Household Services</li>
                      <li>Personal items</li>
                      <li>Baby items</li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-xs-12 margin-t4">
                    <div className="footer-logo">
                      <img
                        src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/footer-logo.png"
                        alt="footer-logo"
                      />
                    </div>
                    <p className="margin-t4">
                      <span>Time : </span>7 Day a week 7:00 AM to 10:00 PM
                    </p>
                    <p>
                      <span>Email : </span>info.gmail.com
                    </p>
                    <p>
                      <span>Phone : </span>0300 1234567
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copy-right pt-5">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <p>2021 Hello Laundry.</p>
                </div>
                <div className="col-md-6 text-right">
                  <div className="footer-social-links">
                    <div className="social-list">
                      <a href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
 }

export default Footer;
