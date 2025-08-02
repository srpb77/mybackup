import React, { useEffect, useState  } from "react";
import { API_BASE_URL,BASE_URL, getTestimonial } from "../../api";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import parse from 'html-react-parser';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
  ],
};

 const Testimonial = () => {

     const [testimonials, setTestimonials] = useState([]);
  
    useEffect(() => {
      const fetchTestimonials = async () => {
        try {
          const data = await getTestimonial();
          setTestimonials(data);
        } catch (error) {
          // Already logged in API function
        }
      };
  
      fetchTestimonials();
    }, []);
 return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <div
          className="section-title text-center position-relative pb-3 mb-4 mx-auto"
          style={{ maxWidth: '600px' }}
        >
          <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
        </div>

        <Slider {...sliderSettings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item bg-light m-3 p-4 rounded shadow-sm">
              <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                <img
                  src={`${BASE_URL}/${testimonial.image}`}
                  alt={testimonial.name}
                  style={{ width: '60px', height: '60px' }}
                  className="rounded-circle me-3"
                />
                <div>
                  <h5 className="mb-0 text-primary">{testimonial.title}</h5>
                  <small className="text-muted">{testimonial.profession}</small>
                </div>
              </div>
              <p className="mb-0"> {testimonial.description && parse(testimonial.description)}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};


export default Testimonial;
