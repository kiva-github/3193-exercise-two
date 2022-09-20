import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// pages
import ArticleListingPage from './containers/article-listing-page/ArticleListingPage';
import ArticlePage from './containers/article-page/ArticlePage';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/articles' element={<ArticleListingPage />} />
        <Route path='/articles/:id' element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
