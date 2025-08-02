import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import useMeta from '../hooks/useMeta';
import { API_BASE_URL,BASE_URL,getAbout,getStats} from "../api";
import parse from 'html-react-parser';
function About() {

  useMeta("About us  Page", "This is my about page.","About,da,fa");

      const [about, setAbout] = useState([]);
  
    useEffect(() => {
      const fetchAbout = async () => {
        try {
          const data = await getAbout();
          setAbout(data);
        } catch (error) {
          // Already logged in API function
        }
      };
  
      fetchAbout();
    }, []);

       const [stats, setStats] = useState([]);
  
    useEffect(() => {
      const fetchStats = async () => {
        try {
          const data = await getStats();
          setStats(data);
        } catch (error) {
          // Already logged in API function
        }
      };
  
      fetchStats();
    }, []);
  return (
    <div>
     
      <>
        {/* About Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-7">
                <div className="section-title position-relative pb-3 mb-5">
                  <h5 className="fw-bold text-primary text-uppercase">
                {about.title}     
                
                  </h5>
                  <h1 className="mb-0">
                   {about.main_title}
                  </h1>
                </div>
                <p className="mb-4">
                {about.description}
                </p>
                <div className="row g-0 mb-3">
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                       {about.award_winning}
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                      {about.professional_staff}
                    </h5>
                  </div>
                  <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                     {about.support}
                    </h5>
                    <h5 className="mb-3">
                      <i className="fa fa-check text-primary me-3" />
                    {about.support}
                    </h5>
                  </div>
                </div>
                <div
                  className="d-flex align-items-center mb-4 wow fadeIn"
                  data-wow-delay="0.6s"
                >
                  <div
                    className="bg-primary d-flex align-items-center justify-content-center rounded"
                    style={{ width: 60, height: 60 }}
                  >
                    <i className="fa fa-phone-alt text-white" />
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Call to ask any question</h5>
                    <h4 className="text-primary mb-0">{stats.site_phone}</h4>
                  </div>
                </div>
                <a
                  href="quote.html"
                  className="btn btn-primary py-3 px-5 mt-3 wow zoomIn"
                  data-wow-delay="0.9s"
                >
                  Request A Quote
                </a>
              </div>
              <div className="col-lg-5" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img
                    className="position-absolute w-100 h-100 rounded wow zoomIn"
                    data-wow-delay="0.9s"
                   src={`${BASE_URL}${about.image}`}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
       
      </>
    </div>
  );
}

export default About;
