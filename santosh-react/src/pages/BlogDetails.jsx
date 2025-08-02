import React, { useEffect, useState  } from "react";
import { useParams } from "react-router-dom";
import { API_BASE_URL,BASE_URL, getBlogDetails ,getRecentBlogDetails,getBlogCategories,submitComment,getCommentsBySlug } from "../api";
import useMeta from '../hooks/useMeta';
import BlogSidebar from '../pages/BlogSidebar';
import parse from 'html-react-parser';
function BlogDetails() {

  useMeta("Blog Details Page", "This is my blog detail page.","Detail,da,fa");

const [recentBlogDetails, setRecentBlogDetails] = useState([]);
 const [blogCategories, setBlogCategories] = useState([]);
  const [blogDetails, setBlogDetails] = useState(null);
const { slug } = useParams(); // 👈 get slug from the URL

useEffect(() => {
  const fetchBlogDetails = async () => {
    try {
      const data = await getBlogDetails(slug); // 👈 pass slug here
      setBlogDetails(data);
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  if (slug) {
    fetchBlogDetails();
  }
}, [slug]);

  const [form, setForm] = useState({
     name: "",
     email: "",
     website: "",
     comment: ""
   });
   const [errors, setErrors] = useState({});
 
   const handleChange = (e) => {
     setForm({ ...form, [e.target.name]: e.target.value });
   };
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     setErrors({});
 
     try {
       const result = await submitComment(slug,form);
       alert(result.message || "Quote submitted successfully!");
       setForm({ name: "", email: "", website: "", comment: "" }); // reset form
     } catch (error) {
       if (error.response && error.response.status === 422) {
         setErrors(error.response.data.errors);
       } else {
         alert("Something went wrong.");
       }
     }
   };

   const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await getCommentsBySlug(slug);
      setComments(data);
    };

    if (slug) fetchComments();
  }, [slug]);
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
        <div className="col-lg-8">
          {/* Blog Detail Start */}


        {blogDetails ? (
  <div className="mb-5">
    <img
      className="img-fluid w-100 rounded mb-5"
      src={blogDetails.image}
      alt={blogDetails.title}
    />
    <h1 className="mb-4">{blogDetails.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: blogDetails.description }} />
  </div>
) : (
  <p>Loading blog details...</p>
)}

        
          {/* Blog Detail End */}
          {/* Comment List Start */}
          <div className="mb-5">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="mb-0">{comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}</h3>
            </div>
           {comments.map((comment, index) => (
  <div className="d-flex mb-4" key={index}>
   
    <div className="ps-3">
      <h6>
        <a href="#">{comment.name}</a>{" "}
        <small>
          <i>{new Date(comment.created_at).toLocaleDateString()}</i>
        </small>
      </h6>
      <p>{comment.comment}</p>
     
    </div>
  </div>
))}
            
          
          </div>
          {/* Comment List End */}
          {/* Comment Form Start */}
          <div className="bg-light rounded p-5">
            <div className="section-title section-title-sm position-relative pb-3 mb-4">
              <h3 className="mb-0">Leave A Comment</h3>
            </div>
           <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-12 col-sm-6">
                 <input
            type="text"
            value={form.name}
            onChange={handleChange}
            name="name"
            className="form-control bg-white border-0"
            placeholder="Your Name"
            style={{ height: 55 }}
          />

                  
                </div>
                <div className="col-12 col-sm-6">
                   <input
            type="email"
            value={form.email}
            onChange={handleChange}
            name="email"
            className="form-control bg-white border-0"
            placeholder="Your Email"
            style={{ height: 55 }}
          />
                </div>
                <div className="col-12">
                <input
            type="text"
            value={form.website}
            onChange={handleChange}
            name="website"
            className="form-control bg-white border-0"
            placeholder="Website"
            style={{ height: 55 }}
          />
                </div>
                <div className="col-12">
                  <textarea
            className="form-control bg-white border-0"
            value={form.comment}
            onChange={handleChange}
            name="comment"
            rows={5}
            placeholder="Comment"
          />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Leave Your Comment
                  </button>
                </div>
              </div>
            </form>
          </div>
          {/* Comment Form End */}
        </div>
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
  );
}

export default BlogDetails;
