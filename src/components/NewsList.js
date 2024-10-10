import React from 'react';

const NewsList = ({ headlines }) => {
  return (
    <div className="news-list">
      {headlines.slice(1, 16).map((article, index) => (
        <div className="news-item" key={index}>
          {article.urlToImage ? (
            <img 
              src={article.urlToImage} 
              alt={article.title} 
              className="news-image"
            />
          ) : (
            <img 
              src="https://via.placeholder.com/400x200?text=No+Image+Available" 
              alt="No image available" 
              className="news-image"
            />
          )}
          
          <h2>{article.title}</h2>

          <a href={article.url} target="_blank" rel="noopener noreferrer">
            <strong>Read full article</strong>
          </a>
          
          <p><strong>Source:</strong> {article.source.name}</p>
          <p><strong>Published:</strong> {new Date(article.publishedAt).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsList;
