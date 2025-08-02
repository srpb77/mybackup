import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { BASE_URL, getBlogSearch, getRecentBlogDetails, getBlogCategories } from "../api";
import BlogSidebar from "../pages/BlogSidebar";

function BlogSearch() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [searchResults, setSearchResults] = useState([]);
  const [recentBlogDetails, setRecentBlogDetails] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);

  // Fetch blogs based on URL ?q=
  useEffect(() => {
    const query = searchParams.get("q");

    const fetchResults = async () => {
      if (query && query.trim()) {
        try {
          const data = await getBlogSearch(query);
          setSearchResults(Array.isArray(data) ? data : []);
        } catch (error) {
          console.error("Search failed:", error);
          setSearchResults([]);
        }
      }
    };

    fetchResults();
  }, [searchParams]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/blog/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div>
      {/* Full Screen Search Modal */}
      <div className="modal fade" id="searchModal" tabIndex={-1}>
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ background: "rgba(9, 30, 62, .7)" }}>
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
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="btn btn-primary px-4" onClick={handleSearch}>
                  <i className="bi bi-search" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            {/* Blog List */}
            <div className="col-lg-8">
              <div className="row g-5">
              {searchResults.length > 0 ? (
  searchResults.map((blog) => (
    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s" key={blog.id}>
      <div className="blog-item bg-light rounded overflow-hidden">
        <div className="blog-img position-relative overflow-hidden">
          <img
            className="img-fluid"
            src={`${BASE_URL}${blog.image}`}
            alt={blog.title}
          />
          <a
            className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4"
            href="#"
          >
            {blog.category.name}
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
              {new Date(blog.created_at).toLocaleDateString()}
            </small>
          </div>
          <h4 className="mb-3">{blog.title}</h4>
          <p
            dangerouslySetInnerHTML={{
              __html: blog.description?.slice(0, 150) + "..."
            }}
          ></p>
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
      No blogs found for this keyword.
    </div>
  </div>
)}

              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              <BlogSidebar
                recentBlogDetails={recentBlogDetails}
                blogCategories={blogCategories}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogSearch;
