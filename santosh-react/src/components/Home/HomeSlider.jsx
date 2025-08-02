import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { API_BASE_URL, getHomeBanners } from "../../api";
const HomeSlider = () => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const data = await getHomeBanners();
        setBanners(data);
      } catch (error) {
        // Already logged in API function
      }
    };

    fetchBanners();
  }, []);

  return (
    <div>
      {/* Carousel */}
      <div
        id="header-carousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                className="w-100"
              src={banner.image}
                alt={banner.heading1}
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">
                    {banner.heading1 || "Creative & Innovative"}
                  </h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">
                    {banner.heading2}
                  </h1>
                  <Link
                    to="/quote"
                    className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                  >
                    Free Quote
                  </Link>
                  <Link
                    to={banner.link}
                    className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomeSlider;