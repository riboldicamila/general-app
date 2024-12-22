import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const NewsItem = ({ article }) => {
  const { title, description, urlToImage, url } = article;

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
      <CardMedia component="img" height="140" image={urlToImage} alt={title} />
      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          {description}
        </Typography>
      </CardContent>
      <Button
        size="small"
        color="primary"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{ margin: 2 }}
      >
        Read More
      </Button>
    </Card>
  );
};

export default NewsItem;
