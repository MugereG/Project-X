import React from 'react';

const Blog = () => {
  // Sample data for articles
  const articles = [
    {
      id: 1,
      imageSrc: 'https://smb.ibsrv.net/imageresizer/image/article_manager/1200x1200/19088/315524/heroimage0.545755001629236151.jpg',
      topic: 'Article 1',
      link: 'https://example.com/article1'
    },
    {
      id: 2,
      imageSrc: 'https://example.com/image2.jpg',
      topic: 'Article 2',
      link: 'https://example.com/article2'
    },
    {
      id: 1,
      imageSrc: 'https://example.com/image1.jpg',
      topic: 'Article 1',
      link: 'https://example.com/article1'
    },
    {
      id: 2,
      imageSrc: 'https://example.com/image2.jpg',
      topic: 'Article 2',
      link: 'https://example.com/article2'
    },
    {
      id: 1,
      imageSrc: 'https://example.com/image1.jpg',
      topic: 'Article 1',
      link: 'https://example.com/article1'
    },
    {
      id: 2,
      imageSrc: 'https://example.com/image2.jpg',
      topic: 'Article 2',
      link: 'https://example.com/article2'
    },
    {
      id: 1,
      imageSrc: 'https://example.com/image1.jpg',
      topic: 'Article 1',
      link: 'https://example.com/article1'
    },
    {
      id: 2,
      imageSrc: 'https://example.com/image2.jpg',
      topic: 'Article 2',
      link: 'https://example.com/article2'
    },
    // Add more articles as needed
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <h2 className="section-heading">Latest Articles</h2>
        <div className="article-cards">
          {articles.map((article) => (
            <a key={article.id} href={article.link} className="article-card">
              <img src={article.imageSrc} alt={article.topic} className="article-image" />
              <p className="article-topic">{article.topic}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
