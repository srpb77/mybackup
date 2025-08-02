// src/hooks/useMeta.js
import { useEffect } from 'react';

const useMeta = (title, description, keywords) => {
  useEffect(() => {
    // Update the page title
    if (title) {
      document.title = title;
    }

    // Update the meta description
    if (description) {
      let metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (!metaDescriptionTag) {
        metaDescriptionTag = document.createElement('meta');
        metaDescriptionTag.name = 'description';
        document.head.appendChild(metaDescriptionTag);
      }
      metaDescriptionTag.content = description;
    }

    // Update the meta keywords
    if (keywords) {
      let metaKeywordsTag = document.querySelector('meta[name="keywords"]');
      if (!metaKeywordsTag) {
        metaKeywordsTag = document.createElement('meta');
        metaKeywordsTag.name = 'keywords';
        document.head.appendChild(metaKeywordsTag);
      }
      metaKeywordsTag.content = keywords;
    }
  }, [title, description, keywords]);
};

export default useMeta;
