import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Grid, CircularProgress, Typography } from "@mui/material"; 
import './News.css'; 

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
    return <CircularProgress />;
  }

  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString(undefined, options);

  return (
    <div>
      <div className="news-header">
        <Typography className="news-title">Today: {formattedDate} - News</Typography>
      </div>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <NewsItem article={article} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default News;