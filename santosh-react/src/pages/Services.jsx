import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import useMeta from '../hooks/useMeta';
import { API_BASE_URL,BASE_URL, getStats,getServices} from "../api";
import parse from 'html-react-parser';

function Services() {

    const [services, setServices] = useState([]);
  
    useEffect(() => {
      const fetchServices = async () => {
        try {
          const data = await getServices();
          setServices(data);
        } catch (error) {
          // Already logged in API function
        }
      };
  
      fetchServices();
    }, []);
  return (
    <div>

      <>
        {/* Service Start */}
        <div
          className="container-fluid py-5 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div
              className="section-title text-center position-relative pb-3 mb-5 mx-auto"
              style={{ maxWidth: 600 }}
            >
              <h5 className="fw-bold text-primary text-uppercase">
               {services.title}
              </h5>
              <h1 className="mb-0">
                {services.main_title}
              </h1>
            </div>
<div className="row g-5">
    {[
      { icon: "fa-shield-alt", title: services.cyber_security, description: services.cyber_security_description },
      { icon: "fa-chart-pie", title: services.analytics, description: services.analytics_description },
      { icon: "fa-code", title: services.development, description: services.development_description },
      { icon: "fab fa-android", title: services.apps_development, description: services.apps_development_description },
      { icon: "fa-search", title: services.seo_optimization, description: services.seo_optimization_description },
    ].map((service, index) => (
      <div key={index} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${0.3 * (index % 3 + 1)}s`}>
        <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <div className="service-icon">
            <i className={`fa ${service.icon} text-white`}></i>
          </div>
          <h4 className="mb-3">{service.title}</h4>
          <p className="m-0">{service.description}</p>
          <a className="btn btn-lg btn-primary rounded" href="">
            <i className="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    ))}
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
      <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
      {services.description && parse(services.description)}
      </div>
    </div>
  </div>
          </div>
        </div>
        {/* Service End */}
      </>
    </div>
  );
}

export default Services;
