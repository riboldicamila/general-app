import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const NewsItem = ({ article }) => {
  return (
    <Card style={{ height: '100%' }}> 
      <CardMedia
        component="img"
        height="140"
        image={article.urlToImage || "default-image-url.jpg"}
        alt={article.title}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {article.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NewsItem;