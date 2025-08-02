import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL,BASE_URL,getStats,getRecentBlogDetails,getBlogCategories} from "../api";
function Footer() {

  const [recentBlogDetails, setRecentBlogDetails] = useState([]);
   const [blogCategories, setBlogCategories] = useState([]);
   useEffect(() => {
              const fetchRecentBlogDetails = async () => {
                try {
                  const data = await getRecentBlogDetails();
                  setRecentBlogDetails(data);
                } catch (error) {
                  // Already logged in API function
                }
              };
          
              fetchRecentBlogDetails();
            }, []);
    
     
      
        useEffect(() => {
          const fetchBlogCategories = async () => {
            try {
              const data = await getBlogCategories();
              setBlogCategories(data);
            } catch (error) {
              // Already logged in API function
            }
          };
      
          fetchBlogCategories();
        }, []);
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
  return (
    <div>
<>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light mt-5 wow fadeInUp"
    data-wow-delay="0.1s"
  >
    <div className="container">
      <div className="row gx-5">
        <div className="col-lg-4 col-md-6 footer-about">
          <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
            <a href="index.html" className="navbar-brand">
              <h1 className="m-0 text-white">
                <i className="fa fa-user-tie me-2" />
                Startup
              </h1>
            </a>
            <p className="mt-3 mb-4">
              Lorem diam sit erat dolor elitr et, diam lorem justo amet clita
              stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam
              amet erat lorem stet eos. Diam amet et kasd eos duo.
            </p>
            <form action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-white p-3"
                  placeholder="Your Email"
                />
                <button className="btn btn-dark">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-8 col-md-6">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-12 pt-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Get In Touch</h3>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-geo-alt text-primary me-2" />
                <p className="mb-0">B-24, Block B, Sector 1, Noida, Uttar Pradesh - 201301</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-envelope-open text-primary me-2" />
                <p className="mb-0">{stats.site_email}</p>
              </div>
              <div className="d-flex mb-2">
                <i className="bi bi-telephone text-primary me-2" />
                <p className="mb-0">{stats.site_phone}</p>
              </div>
              <div className="d-flex mt-4">
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square me-2" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Quick Links</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                <Link className="text-light mb-2" to="/">
  <i className="bi bi-arrow-right text-primary me-2" />
  Home
</Link>
<Link className="text-light mb-2" to="/about">
  <i className="bi bi-arrow-right text-primary me-2" />
  About Us
</Link>
<Link className="text-light mb-2" to="/services">
  <i className="bi bi-arrow-right text-primary me-2" />
  Our Services
</Link>
<Link className="text-light mb-2" to="/team">
  <i className="bi bi-arrow-right text-primary me-2" />
  Meet The Team
</Link>
<Link className="text-light mb-2" to="/blog">
  <i className="bi bi-arrow-right text-primary me-2" />
  Latest Blog
</Link>
<Link className="text-light" to="/contact">
  <i className="bi bi-arrow-right text-primary me-2" />
  Contact Us
</Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
              <div className="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 className="text-light mb-0">Latest Blogs</h3>
              </div>
              <div className="link-animated d-flex flex-column justify-content-start">
                 {recentBlogDetails.map((recentBlogDetail, index) => (
                <a className="text-light mb-2" href={`/blog/${recentBlogDetail.slug}`}>
                  <i className="bi bi-arrow-right text-primary me-2" />
                    {recentBlogDetail.title}
                </a>
                   ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid text-white" style={{ background: "#061429" }}>
    <div className="container text-center">
      <div className="row justify-content-end">
        <div className="col-lg-8 col-md-6">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ height: 75 }}
          >
            <p className="mb-0">
              ©{" "}
              <a className="text-white border-bottom" href="#">
                Your Site Name
              </a>
              . All Rights Reserved.
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
             
              <a
                className="text-white border-bottom"
                href="https://htmlcodex.com"
              style={{ display: "none" }}>
                HTML Codex
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
</>


    </div>
  )
}

export default Footer