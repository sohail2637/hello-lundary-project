import React from "react";
import Home from "./comonnent/Home";
import OurServices from "./comonnent/OurServices";
import Therd from "./comonnent/therd";
import Fifth from "./Fifth";
import Footer from "./Footr/Footer";
import Blogs from "./Blogs";
import Navebar from "./Navebar/Navebar";
import About from "./comonnent/About";
import {BrowserRouter as Router ,Route } from 'react-router-dom';
import LoginPage from "./Authetication/LoginPage";
import SignupPage from "./Authetication/signupPage";
import AdminPanal from "./AdminPanal/Admin";
import PostOrder from "./comonnent/PostOrder";
// import Order from '.'

const Main = () => {
  return (
    <div>
      <Router>
        <Navebar />

        <Route path="/login" exact component={LoginPage} />
        <Route path="/signup" exact component={SignupPage} />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/admin" component={AdminPanal} />
        <Route path="/ourservices" component={OurServices} />
        <Route path="/postorder" component={PostOrder} />
        {/* <OurServices /> */}
        {/* <Therd /> */}
        {/* <Blogs /> */}
        {/* <Fifth /> */}
        <Footer />
      </Router>
    </div>
  );
};

export default Main;
