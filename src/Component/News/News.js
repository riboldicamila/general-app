import React, { useEffect, useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Container,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
});

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Option 1: NewsAPI (free tier - limited to 100 requests/day)
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=8f388ddb1a064717a44bb03c727592c6`
        );
        const data = await response.json();
        setArticles(data.articles);

        // Option 2: Gnews API (free tier - 100 requests/day)
        // const response = await fetch(
        //   `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=us&max=10&apikey=YOUR_API_KEY`
        // );
        // const data = await response.json();
        // setArticles(data.articles);

        // Option 3: MediaStack API (free tier - 500 requests/month)
        // const response = await fetch(
        //   `http://api.mediastack.com/v1/news?access_key=YOUR_API_KEY&categories=${category}&languages=en&countries=us`
        // );
        // const data = await response.json();
        // setArticles(data.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Failed to load news. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  const today = new Date();
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = today.toLocaleDateString(undefined, options);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="400px"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box textAlign="center" p={4}>
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Today: {formattedDate} - News
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              {article.urlToImage && (
                <CardMedia
                  component="img"
                  height="200"
                  image={article.urlToImage}
                  alt={article.title}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {article.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read More
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default News;
