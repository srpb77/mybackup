import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CountUp from "react-countup";
import useMeta from '../hooks/useMeta';
import { API_BASE_URL,BASE_URL, getStats,getAbout, getChooseUs,getServices,submitQuote } from "../api";
import parse from 'html-react-parser';

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (isNaN(end)) return;

    const duration = 5000; // Animation time in ms
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return <h1 className="text-black mb-0">{count}</h1>;
};

 
 
const Home = () => {


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


      const [chooseus, setChooseUs] = useState([]);
  
    useEffect(() => {
      const fetchChooseUs = async () => {
        try {
          const data = await getChooseUs();
          setChooseUs(data);
        } catch (error) {
          // Already logged in API function
        }
      };
  
      fetchChooseUs();
    }, []);

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

   const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const result = await submitQuote(form);
      alert(result.message || "Quote submitted successfully!");
      setForm({ name: "", email: "", service: "", message: "" }); // reset form
    } catch (error) {
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
      } else {
        alert("Something went wrong.");
      }
    }
  };

  

     useMeta(stats.seo_title, stats.seo_description, stats.seo_keywords);
     
  return (

  
     
   
    <div>
      <div className="container-fluid facts py-5 pt-lg-0">
      <div className="container py-5 pt-lg-0">
        <div className="row gx-0">
          {/* Happy Clients */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-users text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Happy Clients</h5>
                <h1 className="text-white mb-0">
                  <CountUp start={0} end={stats.happy_clients} duration={3} separator="," />
                </h1>
              </div>
            </div>
          </div>

          {/* Projects Done */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div
              className="bg-light shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-check text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-primary mb-0">Projects Done</h5>
                <h1 className="mb-0">
                  <CountUp start={0} end={stats.project_done} duration={3} separator="," />
                </h1>
              </div>
            </div>
          </div>

          {/* Win Awards */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div
              className="bg-primary shadow d-flex align-items-center justify-content-center p-4"
              style={{ height: "150px" }}
            >
              <div
                className="bg-white d-flex align-items-center justify-content-center rounded mb-2"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-award text-primary"></i>
              </div>
              <div className="ps-4">
                <h5 className="text-white mb-0">Win Awards</h5>
                <h1 className="text-white mb-0">
                  <CountUp start={0} end={stats.win_wards} duration={3} separator="," />
                </h1>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">{about.title}</h5>
              <h1 className="mb-0">{about.main_title}</h1>
            </div>
          
<p classname="mb-4">{about.description}</p>
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
            <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
              <div
                className="bg-primary d-flex align-items-center justify-content-center rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">{stats.site_phone}</h4>
              </div>
            </div>
            <a href="quote.html" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">
              Request A Quote
            </a>
          </div>
          <div className="col-lg-5" style={{ minHeight: "500px" }}>
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.9s"
                src={`${BASE_URL}${about.image}`}
                alt="About Us"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-5 mx-auto"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="fw-bold text-primary text-uppercase">{chooseus.title}</h5>
          <h1 className="mb-0">{chooseus.main_title}</h1>
        </div>
        <div className="row g-5">
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-cubes text-white"></i>
                </div>
                <h4>{chooseus.industry}</h4>
                <p className="mb-0">
                 {chooseus.industry_description}
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-award text-white"></i>
                </div>
                <h4>{chooseus.winning}</h4>
                <p className="mb-0">
                  {chooseus.winning_description}
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-4 wow zoomIn"
            data-wow-delay="0.9s"
            style={{ minHeight: "350px" }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute w-100 h-100 rounded wow zoomIn"
                data-wow-delay="0.1s"
               src={`${BASE_URL}${chooseus.image}`}
                alt="Features"
                style={{ objectFit: "cover" }}
              />

             
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row g-5">
              <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-users-cog text-white"></i>
                </div>
                <h4>{chooseus.staff}</h4>
                <p className="mb-0">
                {chooseus.staff_description}
                </p>
              </div>
              <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div
                  className="bg-primary rounded d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <h4>    {chooseus.support}</h4>
                <p className="mb-0">
                    {chooseus.support_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }}>
          <h5 className="fw-bold text-primary text-uppercase">{services.title}</h5>
          <h1 className="mb-0">{services.main_title}</h1>
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

    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-7">
            <div className="section-title position-relative pb-3 mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
              <h1 className="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
            </div>
            <div className="row gx-3">
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 className="mb-4">
                  <i className="fa fa-reply text-primary me-3"></i>Reply within 24 hours
                </h5>
              </div>
              <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 className="mb-4">
                  <i className="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support
                </h5>
              </div>
            </div>
            <p className="mb-4">
              Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at
              dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam
              duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.
            </p>
            <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <div className="ps-4">
                <h5 className="mb-2">Call to ask any question</h5>
                <h4 className="text-primary mb-0">+012 345 6789</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
            <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-xl-12">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="form-control bg-light border-0"
            placeholder="Your Name"
            style={{ height: 55 }}
          />
          {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>}
        </div>
        <div className="col-12">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="form-control bg-light border-0"
            placeholder="Your Email"
            style={{ height: 55 }}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}
        </div>
        <div className="col-12">
          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="form-select bg-light border-0"
            style={{ height: 55 }}
          >
            <option value="">Select A Service</option>
            <option value="Service 1">Service 1</option>
            <option value="Service 2">Service 2</option>
            <option value="Service 3">Service 3</option>
          </select>
          {errors.service && <p style={{ color: 'red' }}>{errors.service[0]}</p>}
        </div>
        <div className="col-12">
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-control bg-light border-0"
            rows="3"
            placeholder="Message"
          ></textarea>
          {errors.message && <p style={{ color: 'red' }}>{errors.message[0]}</p>}
        </div>
        <div className="col-12">
          <button className="btn btn-dark w-100 py-3" type="submit">
            Request A Quote
          </button>
        </div>
      </div>
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}
export default Home
