import React, { useEffect, useState  } from "react";
import { API_BASE_URL,BASE_URL, getRecentBlog } from "../../api";

function Blog() {

   const [recentBlogs, setRecentBlogs] = useState([]);
      
        useEffect(() => {
          const fetchRecentBlogs = async () => {
            try {
              const data = await getRecentBlog();
              setRecentBlogs(data);
            } catch (error) {
              // Already logged in API function
            }
          };
      
          fetchRecentBlogs();
        }, []);
  return (
    <div>
        <>
  {/* Blog Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div
        className="section-title text-center position-relative pb-3 mb-5 mx-auto"
        style={{ maxWidth: 600 }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Latest Blog</h5>
        <h1 className="mb-0">Read The Latest Articles from Our Blog Post</h1>
      </div>
      <div className="row g-5">

         {recentBlogs.map((recentBlog, index) => (
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="blog-item bg-light rounded overflow-hidden">
            <div className="blog-img position-relative overflow-hidden">
              <img className="img-fluid" src={recentBlog.image} alt="" />
              <a
                className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
                href=""
              >
               {recentBlog.category}
              </a>
            </div>
            <div className="p-4">
              <div className="d-flex mb-3">
                <small className="me-3">
                  <i className="far fa-user text-primary me-2" />
                  Admin
                </small>
                <small>
                  <i className="far fa-calendar-alt text-primary me-2" />
                  {recentBlog.category}
                </small>
              </div>
              <h4 className="mb-3"> {recentBlog.title}</h4>
              <p>
                 {recentBlog.excerpt}
              </p>
              <a className="text-uppercase" href={`/blog/${recentBlog.slug}`}>
                Read More <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>
        ))}
       
      </div>
    </div>
  </div>
  {/* Blog Start */}
</>

    </div>
  )
}

export default Blog