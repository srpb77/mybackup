import React, { useEffect, useState  } from "react";
import { useParams,useSearchParams, useNavigate } from "react-router-dom";

import { API_BASE_URL,BASE_URL, getRecentBlogDetails,getBlogCategories} from "../api";

 function BlogSidebar() {

const [recentBlogDetails, setRecentBlogDetails] = useState([]);
 const [blogCategories, setBlogCategories] = useState([]);
 
 const { categoryId } = useParams();

const navigate = useNavigate();
const [searchParams] = useSearchParams();
const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
const [searchResults, setSearchResults] = useState([]);

const handleSearch = () => {
  if (searchTerm.trim()) {
    navigate(`/blog/search?q=${(searchTerm)}`);
  }
};

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
     return (



    <div>
     
    <>
 {/* Sidebar Start */}
       
          {/* Search Form Start */}
          <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
            <div className="input-group">
             <input

  className="form-control bg-transparent border-primary p-3"
   type="text"
   
    placeholder="Keyword"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
/>
<button className="btn btn-primary px-4" onClick={handleSearch}>
  <i className="bi bi-search" />
</button>
            </div>
          </div>
          {/* Search Form End */}
          {/* Category Start */}
          <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="mb-0">Categories</h3>
            </div>
            <div className="link-animated d-flex flex-column justify-content-start">
              {blogCategories.map((blogCategory, index) => (
              
              
              <a
                className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2"
               href={`/blog/category/${blogCategory.id}`}
              >
                <i className="bi bi-arrow-right me-2" />
                {blogCategory.name}
              </a>
             ))}
            </div>
          </div>
          {/* Category End */}
          {/* Recent Post Start */}
          <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="mb-0">Recent Post</h3>
            </div>
             {recentBlogDetails.map((recentBlogDetail, index) => (
            <div className="d-flex rounded overflow-hidden mb-3">
              <img
                className="img-fluid"
                src={recentBlogDetail.image}
                style={{ width: 100, height: 100, objectFit: "cover" }}
                alt=""
              />
              <a
                href={`/blog/${recentBlogDetail.slug}`}
                className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0"
              >
                {recentBlogDetail.title}
              </a>
            </div>
             ))}
           
            
          </div>
          {/* Recent Post End */}
          {/* Image Start */}
          <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
            <img src="/img/blog-1.jpg" alt="" className="img-fluid rounded" />
          </div>
          {/* Image End */}
          
        
       
        {/* Sidebar End */}

        </>

    </div>
  );

            }

 export default BlogSidebar;