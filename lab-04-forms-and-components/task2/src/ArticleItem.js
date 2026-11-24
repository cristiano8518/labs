import React, { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
  const [isOpened, setIsOpened] = useState(false);

  const onClickToggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <li>
      <a href={'#'} onClick={onClickToggle}>{article.title}</a>
      <button onClick={() => onClickRemove(article.id)}>×</button>
      <p style={{ display: isOpened ? 'block' : 'none' }}>{article.summary}</p>
    </li>
  );
};

export default ArticleItem;
