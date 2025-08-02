// BlogList.jsx
import React, { useEffect, useState } from "react";
// Ensure BASE_URL is correctly exported from '../api'
import { BASE_URL, getRecentBlogDetails, getBlogCategories, getBlogAll } from "../api";
import BlogSidebar from "../pages/BlogSidebar";

function BlogList() {
  const [recentBlogDetails, setRecentBlogDetails] = useState([]);
  const [blogCategories, setBlogCategories] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [pagination, setPagination] = useState({ current_page: 1, last_page: 1 });
  const [loadingBlogs, setLoadingBlogs] = useState(true); // New loading state for main blogs
  const [loadingSidebar, setLoadingSidebar] = useState(true); // New loading state for sidebar data
  const [errorBlogs, setErrorBlogs] = useState(null); // New error state for main blogs
  const [errorSidebar, setErrorSidebar] = useState(null); // New error state for sidebar data

  useEffect(() => {
    // Initial fetch for main blogs with loading/error handling
    const initialFetchBlogs = async () => {
      setLoadingBlogs(true);
      setErrorBlogs(null);
      try {
        const data = await getBlogAll(1);
        setBlogs(data.data);
        setPagination({
          current_page: data.current_page,
          last_page: data.last_page,
        });
      } catch (error) {
        console.error("Error fetching initial blogs:", error);
        setErrorBlogs("Failed to load blog posts. Please try again later.");
      } finally {
        setLoadingBlogs(false);
      }
    };

    // Fetch for recent blog details with loading/error handling
    const fetchRecentBlogDetails = async () => {
      try {
        const data = await getRecentBlogDetails();
        setRecentBlogDetails(data);
      } catch (error) {
        console.error("Error fetching recent blog details:", error);
        setErrorSidebar("Failed to load recent blogs.");
      }
    };

    // Fetch for blog categories with loading/error handling
    const fetchBlogCategories = async () => {
      try {
        const data = await getBlogCategories();
        setBlogCategories(data);
      } catch (error) {
        console.error("Error fetching blog categories:", error);
        setErrorSidebar("Failed to load blog categories.");
      }
    };

    initialFetchBlogs();
    // Fetch sidebar data concurrently and manage its loading state
    Promise.all([fetchRecentBlogDetails(), fetchBlogCategories()])
        .finally(() => setLoadingSidebar(false));

  }, []); // Empty dependency array means this runs once on mount

  const fetchBlogs = async (page) => {
    setLoadingBlogs(true); // Set loading true when a page change is initiated
    setErrorBlogs(null); // Clear previous errors
    try {
      const data = await getBlogAll(page);
      setBlogs(data.data);
      setPagination({
        current_page: data.current_page,
        last_page: data.last_page,
      });
    } catch (error) {
      console.error(`Error fetching blogs for page ${page}:`, error);
      setErrorBlogs(`Failed to load blogs for page ${page}.`);
    } finally {
      setLoadingBlogs(false); // Set loading false after fetch completes
    }
  };

  const handlePageChange = (page) => {
    if (page !== pagination.current_page) {
      fetchBlogs(page);
    }
  };

  return (
    <div>
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-5">
                {loadingBlogs ? (
                  <div className="col-12 text-center py-5">
                    <div className="spinner-border text-primary" role="status">
                      <span className="visually-hidden">Loading blogs...</span>
                    </div>
                  </div>
                ) : errorBlogs ? (
                  <div className="col-12 text-center py-5 text-danger">
                    <p>{errorBlogs}</p>
                  </div>
                ) : Array.isArray(blogs) && blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s" key={blog.id}> {/* Use blog.id directly */}
                      <div className="blog-item bg-light rounded overflow-hidden">
                        <div className="blog-img position-relative overflow-hidden">
                          {/* Ensure BASE_URL is correctly set up for image paths */}
                          <img className="img-fluid" src={`${BASE_URL}${blog.image}`} alt={blog.title} />
                          {/* Consider replacing '#' with actual category page link or make it a button if interactive */}
                          <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href={`/blog/category/${blog.category_slug || '#'}`}>
                            {blog.category || "Uncategorized"}
                          </a>
                        </div>
                        <div className="p-4">
                          <div className="d-flex mb-3">
                            <small className="me-3">
                              <i className="far fa-user text-primary me-2" /> {blog.author_name || "Admin"} {/* Show actual author if available */}
                            </small>
                            <small>
                              <i className="far fa-calendar-alt text-primary me-2" />
                              {/* Format date for better readability */}
                              {blog.created_at ? new Date(blog.created_at).toLocaleDateString() : 'N/A'}
                            </small>
                          </div>
                          <h4 className="mb-3">{blog.title}</h4>
                          {/* Use dangerouslySetInnerHTML with caution and only for trusted content */}
                          <div dangerouslySetInnerHTML={{ __html: blog.excerpt }} />
                          <a className="text-uppercase" href={`/blog/${blog.slug}`}>
                            Read More <i className="bi bi-arrow-right" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <p>No blog posts found.</p>
                  </div>
                )}


                {/* Pagination Controls */}
                {!loadingBlogs && !errorBlogs && blogs.length > 0 && ( // Only show pagination if blogs are loaded and no error
                  <div className="mt-5 d-flex justify-content-center">
                    <nav>
                      <ul className="pagination">
                        {[...Array(pagination.last_page)].map((_, i) => (
                          <li className={`page-item ${pagination.current_page === i + 1 ? "active" : ""}`} key={i + 1}> {/* Key should be unique */}
                            <button className="page-link" onClick={() => handlePageChange(i + 1)} disabled={loadingBlogs}>
                              {i + 1}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              {loadingSidebar ? (
                <div className="text-center py-5">
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading sidebar...</span>
                  </div>
                </div>
              ) : errorSidebar ? (
                <div className="text-danger py-5">
                  <p>{errorSidebar}</p>
                </div>
              ) : (
                <BlogSidebar
                  recentBlogDetails={recentBlogDetails}
                  blogCategories={blogCategories}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;