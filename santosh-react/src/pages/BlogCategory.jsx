import React, { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL,BASE_URL,getBlogByCategories,getRecentBlogDetails,getBlogCategories } from "../api";
import BlogSidebar from '../pages/BlogSidebar';
import useMeta from '../hooks/useMeta';

function BlogCategory() {

const { categoryId } = useParams(); // 👈 This makes categoryId available
  const [categoryByBlogs, setCategoryByBlogs] = useState([]); // 👈 This makes both state vars defined

  useEffect(() => {
    const fetchCategoryBlogs = async () => {
      try {
        const res = await getBlogByCategories(categoryId);
        if (res && Array.isArray(res.data)) {
          setCategoryByBlogs(res.data);
        } else {
          setCategoryByBlogs([]);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setCategoryByBlogs([]);
      }
    };

    if (categoryId) fetchCategoryBlogs();
  }, [categoryId]);

  const [recentBlogDetails, setRecentBlogDetails] = useState([]);
         
         
   
     const [blogCategories, setBlogCategories] = useState([]);
     
     
  return (
    <div>
       <>
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* Blog Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5">
        {/* Blog list Start */}
        <div className="col-lg-8">
          <div className="row g-5">
          {Array.isArray(categoryByBlogs) && categoryByBlogs.length > 0 ? (
  categoryByBlogs.map((blog, index) => (
    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s" key={blog.id || index}>
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img className="img-fluid" src={`${BASE_URL}${blog.image}`} alt={blog.title} />
          <a
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
            href="#"
          >
            {blog.category}
          </a>
        </div>
        <div className="p-4">
          <div className="d-flex mb-3">
            <small className="me-3">
              <i className="far fa-user text-primary me-2" />
              John Doe
            </small>
            <small>
              <i className="far fa-calendar-alt text-primary me-2" />
              {blog.created_at}
            </small>
          </div>
          <h4 className="mb-3">{blog.title}</h4>
          <p>{blog.excerpt}</p>
          <a className="text-uppercase" href={`/blog/${blog.slug}`}>
            Read More <i className="bi bi-arrow-right" />
          </a>
        </div>
      </div>
    </div>
  ))
) : (
  <div className="col-12">
    <div className="alert alert-warning text-center" role="alert">
      No blogs found in this category.
    </div>
  </div>
)}
          
            
          
           
          </div>
        </div>
        {/* Blog list End */}
        {/* Sidebar Start */}
         <div className="col-lg-4">
  <BlogSidebar
    recentBlogDetails={recentBlogDetails}
    blogCategories={blogCategories}
  />
</div>
        {/* Sidebar End */}
      </div>
    </div>
  </div>
  {/* Blog End */}
  
</>


    </div>
  )
}

export default BlogCategory