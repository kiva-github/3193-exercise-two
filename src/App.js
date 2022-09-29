import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// pages
import ArticleListingPage from './containers/article-listing-page/ArticleListingPage';
import ArticlePage from './containers/article-page/ArticlePage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/articles' element={<ArticleListingPage />} />
        <Route path='/articles/:articleId' element={<ArticlePage />} />
        <Route path="/" element={<Navigate replace to="/articles" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
