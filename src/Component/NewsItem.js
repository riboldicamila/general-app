import React from 'react';

const NewsItem = ({ article }) => {
    const { title, description, urlToImage, url } = article;

    return (
        <div className="news-item">
            <img src={urlToImage} alt={title} />
            <h5>{title}</h5>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
    );
};

export default NewsItem;