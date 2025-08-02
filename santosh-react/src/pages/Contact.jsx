import { useEffect, useState } from "react";
import { API_BASE_URL,BASE_URL,submitContact } from "../api";

function Contact() {
   const [form, setForm] = useState({
      name: "",
      email: "",
      subject: "",
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
        const result = await submitContact(form);
        alert(result.message || "Contact submitted successfully!");
        setForm({ name: "", email: "", subject: "", message: "" }); // reset form
      } catch (error) {
        if (error.response && error.response.status === 422) {
          setErrors(error.response.data.errors);
        } else {
          alert("Something went wrong.");
        }
      }
    };
  return (
    <div>

<>
  {/* Contact Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
        <h1 className="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
      </div>
      <div className="row g-5 mb-5">
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-phone-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Call to ask any question</h5>
              <h4 className="text-primary mb-0">+91-8700611032</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.4s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-envelope-open text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Email to get free quote</h5>
              <h4 className="text-primary mb-0">sbhartimca09@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div
            className="d-flex align-items-center wow fadeIn"
            data-wow-delay="0.8s"
          >
            <div
              className="bg-primary d-flex align-items-center justify-content-center rounded"
              style={{ width: 60, height: 60 }}
            >
              <i className="fa fa-map-marker-alt text-white" />
            </div>
            <div className="ps-4">
              <h5 className="mb-2">Visit our office</h5>
              <h4 className="text-primary mb-0">B-24, Block B, Sector 1, Noida, Uttar Pradesh - 201301</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-5">
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
         <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                   name="name"
            value={form.name}
            onChange={handleChange}
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
                 {errors.name && <p style={{ color: 'red' }}>{errors.name[0]}</p>}
              </div>
              <div className="col-md-6">
                <input
                  type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
                 {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}
              </div>
              <div className="col-12">
                <input
                  type="text"
                  name="subject"
            value={form.subject}
            onChange={handleChange}
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
                  {errors.subject && <p style={{ color: 'red' }}>{errors.subject[0]}</p>}
              </div>
              <div className="col-12">
                <textarea
                name="message"
            value={form.message}
            onChange={handleChange}
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={4}
                  placeholder="Message"
                  defaultValue={""}
                />
                  {errors.message && <p style={{ color: 'red' }}>{errors.message[0]}</p>}
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ minHeight: 350, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
 
</>

    </div>
  )
}

export default Contact