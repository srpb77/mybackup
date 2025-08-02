import axios from "axios";

export const API_BASE_URL = "http://127.0.0.1:8000/api/";
export const BASE_URL = "http://127.0.0.1:8000";

// Create Axios instance with default settings

export const getHomeBanners = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}home-banners`);
    return response.data;
  } catch (error) {
    console.error("Error fetching home banners:", error);
    throw error;
  }
};

export const getStats = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}stats`);
    return response.data;
  } catch (error) {
    console.error("Error fetching home banners:", error);
    throw error;
  }
};

export const getAbout = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}about/1`);
    return response.data;
  } catch (error) {
    console.error("Error fetching About Us:", error);
    throw error;
  }
};
export const getChooseUs = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}chooseus/1`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Choose Us:", error);
    throw error;
  }
};

export const getServices = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}services/1`);
    return response.data;
  } catch (error) {
    console.error("Error fetching Services:", error);
    throw error;
  }
};

export const submitQuote = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}quotes`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting quote:", error);
    throw error;
  }
};


export const submitContact = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}contacts`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting contact:", error);
    throw error;
  }
};

export const submitComment = async (slug, formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}blog/${slug}/comments`, formData);
    return response.data;
  } catch (error) {
    console.error("Error submitting comment:", error);
    throw error;
  }
};

export const getTestimonial = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}testimonial`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};


export const getTeam = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}team`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};


export const getRecentBlog = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}recent-blogs`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};


export const getRecentBlogDetails = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}recent-blogs-details`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};

export const getBlogDetails = async (slug) => {
  const response = await axios.get(`${API_BASE_URL}blog/${slug}`);
  return response.data;
};

export const getBlogCategories = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}blog-categories`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    throw error;
  }
};

export const getBlogSearch = async (searchTerm) => {
  try {
    const response = await axios.get(`${API_BASE_URL}blog/search`, {
      params: { q: searchTerm }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching blog search results:", error);
    return [];
  }
};
export const getBlogByCategories = async (categoryById) => {
  try {
  const response = await axios.get(`${API_BASE_URL}blog/category/${categoryById}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blogs:", error);
    throw error;
  }
};

export const getCommentsBySlug = async (slug) => {
  try {
    const response = await axios.get(`${API_BASE_URL}blog/${slug}/commentsget`);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    return [];
  }
};

export const getBlogAll = async (page = 1) => {
  try {
    const response = await axios.get(`${API_BASE_URL}blog`, {
      params: {
        page: page // ✅ This is the critical change!
      }
    });
    return response.data;
  } catch (error) {
    // Better error message for clarity
    console.error("Error fetching blogs:", error);
    throw error;
  }
};