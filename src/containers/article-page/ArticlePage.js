import { useParams } from 'react-router'

// styles
import './ArticlePage.scss'

// data
import data from '../../data'

export default function ArticlePage() {
  const { articleId } = useParams()
  const articleData = data.find((article) => article.id === articleId)
  const { id, title, publishedDate, blurb, articleText, image} = articleData
     
  return (
    <div key={id} className='article-page-container'>
      <div className='article-header'>
        <div className='img-container'>
          <img src={image.url} alt={image.alt}/>
        </div>
        
        <div className='header-details'>
          <h1>{title}</h1>
          <h5>{publishedDate.substring(0, 10)}</h5>
          <p>{blurb}</p>
        </div>

      </div>

      <div className='article-content'>
        {articleText.map((text) => {
          switch (text.type) {
            case 'p':
              return <p key={Math.random()}>{text.data}</p>
            case 'h2':
              return <h2 key={Math.random()}>{text.data}</h2>
            case 'h3':
              return <h3 key={Math.random()}>{text.data}</h3>
            default:
              return null
          }
        })}
      </div>
    </div>
  )
}
