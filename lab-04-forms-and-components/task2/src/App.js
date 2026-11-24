import React from 'react';
import ArticleManager from './ArticleManager'; // Импортируем ArticleManager
import './App.css';

function App() {
  return (
    <div className="App">
      <ArticleManager />  {/* Используем ArticleManager в основном приложении */}
    </div>
  );
}

export default App;
