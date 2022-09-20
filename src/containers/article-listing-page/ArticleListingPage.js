import './ArticleListingPage.scss'

// data
import data from '../../data'

// components
import ArticleListing from '../../components/article-listing/ArticleListing'

export default function ArticleListingPage() {
  return (
    <div className='main-container'>
      <div className='article-listing-page-container'>
        <h1>Articles</h1>
        
        {data && data.map((article) => (
          <ArticleListing key={article.id} article={article}/>
        ))}
      </div>
    </div>
  )
}
