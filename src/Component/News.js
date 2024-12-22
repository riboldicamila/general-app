import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem"; 

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=8f388ddb1a064717a44bb03c727592c6`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Error fetching the news", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="news-container">
      {articles.map((article, index) => (
        <NewsItem key={index} article={article} />
      ))}
    </div>
  );
};

export default News;
