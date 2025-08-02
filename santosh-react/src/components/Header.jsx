import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomeSlider from './Home/HomeSlider';
import BannerSlider from './Banner/BannerSlider';
import ServicesBannerSlider from './Banner/ServicesBannerSlider';
import BlogBannerSlider from './Banner/BlogBannerSlider';
import ContactBanner from './Banner/ContactBanner';
import BlogDetailBanner from './Banner/BlogDetailBanner';
import BlogCategoryBanner from './Banner/BlogCategoryBanner';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>

         {/* Topbar Start */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <small className="me-3 text-light">
                <i className="fa fa-map-marker-alt me-2"></i>B-24, Block B, Sector 1, Noida, Uttar Pradesh - 201301
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+91-8700611032
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>sbhartimca09@gmail.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="#">
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href="#">
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar & Carousel Start */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <h1 className="m-0">
              <i className="fa fa-user-tie me-2"></i>Startup
            </h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
             <>
    <NavLink to="/" className="nav-item nav-link" end>
      Home
    </NavLink>
    <NavLink to="/about" className="nav-item nav-link">
      About
    </NavLink>
    <NavLink to="/services" className="nav-item nav-link">
      Services
    </NavLink>
    <NavLink to="/blog" className="nav-item nav-link">
      Blog
    </NavLink>
    <NavLink to="/contact" className="nav-item nav-link">
      Contact
    </NavLink>
  </>
            </div>
          </div>
        </nav>
        <Routes>
<Route path="/" element={<div><HomeSlider /></div>} />
<Route path="/about" element={<div><BannerSlider /></div>} />
<Route path="/services" element={<div><ServicesBannerSlider /></div>} />
<Route path="/blog" element={<div><BlogBannerSlider /></div>} />
<Route path="/contact" element={<div><ContactBanner /></div>} />
<Route path="/blog/:slug" element={<div><BlogDetailBanner /></div>} />
<Route path="/blog/category/:categoryId" element={<div><BlogCategoryBanner /></div>} />
<Route path="/blog/search" element={<div><BlogCategoryBanner /></div>} />
    </Routes>
       
      </div>
    </div>
  )
}

export default Header