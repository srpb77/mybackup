import React, { useEffect } from "react";

const Client = () => {
  useEffect(() => {
    if (window.$) {
      window.$(".vendor-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false, // Hide prev/next buttons
        dots: false, // Hide pagination dots
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 2 },
          600: { items: 4 },
          1000: { items: 6 }
        }
      });
    }
  }, []);

  const vendors = [
    "vendor-1.jpg",
    "vendor-2.jpg",
    "vendor-3.jpg",
    "vendor-4.jpg",
    "vendor-5.jpg",
    "vendor-6.jpg",
    "vendor-7.jpg",
    "vendor-8.jpg",
    "vendor-9.jpg",
  ];

  return (
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div className="container py-5 mb-5">
        <div className="bg-white">
          <div className="owl-carousel vendor-carousel">
            {vendors.map((vendor, index) => (
              <img key={index} src={`/img/${vendor}`} alt={`Vendor ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
