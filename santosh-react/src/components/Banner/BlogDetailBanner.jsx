import React from 'react'

function BlogDetailBanner() {
  return (
    <div
    className="container-fluid bg-primary py-5 bg-header"
    style={{
      marginBottom: "90px",
      background: `linear-gradient(rgba(9, 30, 62, 0.7), rgba(9, 30, 62, 0.7)), url("/img/carousel-1.jpg") center center no-repeat`,
      backgroundSize: "cover",
    }}
  >
    <div className="row py-5">
      <div className="col-12 pt-lg-5 mt-lg-5 text-center">
        <h1 className="display-4 text-white animated zoomIn">Blog Details</h1>
        <a className="h5 text-white" href="/">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a className="h5 text-white" href="#">
        Blog Details
        </a>
      </div>
    </div>
  </div>
  )
}

export default BlogDetailBanner