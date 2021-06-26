import { TurnedInOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navebar = () => {
  const [toogle, setToogle] = useState(false);
  return (
    <>
      <div>
        <header className="main-headerss">
          <div className="header-top">
            <div className="container">
              <div className="d-flex">
                <div className="top-contacts">
                  <span>
                    <i className="fa fa-envelope" />
                    arshannawaz.one@gmail.com
                  </span>
                  <span>
                    <i className="fa fa-phone" />
                    0315&nbsp;&nbsp;0683895
                  </span>
                </div>
                <div className="d-flex right">
                  <div className="top-social">
                    <div className="social-list">
                      <a
                        href="https://www.facebook.com/TheArshan.Official"
                        target="_blank"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a
                        href="https://twitter.com/arshanofficial_?s=09"
                        target="_blank"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                      <a
                        href="https://www.instagram.com/arshannawaz.official/"
                        target="_blank"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                      <a href="https://www.linkedin.com/">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row"></div>
            </div>
          </div>
          <div className="main-nav">
            <div className="container">
              <nav
                className="navbar navbar-default navbar-expand-lg navbar-light"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div className="navbar-header">
                  <button
                    className="navbar-toggle"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setToogle(!toogle)}
                  >
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  <Link className="navbar-brand" to="/">
                    <img
                      src="http://hl.devpoint.website/wp-content/themes/laundry-child/assets/img/logo-main.png"
                      alt="Logo"
                    />
                  </Link>
                </div>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul id="menu-menu-1" className="menu nav navbar-nav">
                    <li
                      id="nav-menu-item-4398"
                      className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home"
                    >
                      <Link to="/" className="menu-link main-menu-link">
                        Home
                      </Link>
                    </li>
                    <li
                      id="nav-menu-item-2462"
                      className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <Link to="/about" className="menu-link main-menu-link">
                        About
                      </Link>
                    </li>
                    <li
                      id="nav-menu-item-2462"
                      className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                    >
                      <Link
                        to="/ourservices"
                        className="menu-link main-menu-link"
                      >
                        order
                      </Link>
                    </li>
                    {/* <li
                    id="nav-menu-item-2462"
                    className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
                  >
                    <Link
                      to="/ourservices"
                      className="menu-link main-menu-link"
                    >
                      contactus
                    </Link>
                  </li> */}
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          className="nav-link btn btn-primary pl-3 pr-3"
                          to="/login"
                        >
                          Sign in
                        </Link>
                        <Link
                          className="nav-link btn btn-primary pl-3 pr-3"
                          to="/signup"
                        >
                          | Register
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>
      </div>
      {toogle ? (
        <div style={{ position: "absolute" }}>
          <ul id="menu-menu-1" className="menu nav navbar-nav">
            <li
              id="nav-menu-item-4398"
              className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home"
              onClick={() => setToogle(false)}
            >
              <Link to="/" className="menu-link main-menu-link">
                Home
              </Link>
            </li>
            <li
              id="nav-menu-item-2462"
              className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
              onClick={() => setToogle(false)}
            >
              <Link to="/about" className="menu-link main-menu-link">
                About
              </Link>
            </li>
            <li
              id="nav-menu-item-2462"
              className="main-menu-item  menu-item-even menu-item-depth-0 menu-item menu-item-type-post_type menu-item-object-page"
              onClick={() => setToogle(false)}
            >
              <Link to="/ourservices" className="menu-link main-menu-link">
                order
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => setToogle(false)}
              >
                <Link
                  className="nav-link btn btn-primary pl-3 pr-3"
                  to="/login"
                >
                  Sign in
                </Link>
                <div onClick={() => setToogle(false)}>
                  <Link
                    className="nav-link btn btn-primary pl-3 pr-3"
                    to="/signup"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navebar;
