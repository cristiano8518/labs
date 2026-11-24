import React, { useState } from 'react';
import AddArticle from './AddArticle';  // Импортируем AddArticle
import ArticleList from './ArticleList';  // Импортируем ArticleList

const ArticleManager = () => {
  const [articles, setArticles] = useState([]);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  const onClickAdd = () => {
    const newArticle = {
      id: articles.length + 1,
      title,
      summary,
      display: 'none',
    };
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };

  const onClickRemove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  return (
    <div>
      <AddArticle
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />
      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
};

export default ArticleManager;
