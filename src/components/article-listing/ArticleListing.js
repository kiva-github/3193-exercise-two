import { Link } from 'react-router-dom'

// styles
import './ArticleListing.scss'

export default function ArticleListing({ article }) {
  const { title, publishedDate, blurb, id, image } = article

  return (
    <div className='article-listing-container'>
        <img src={image.url} alt={image.alt}/>
        <div className='article-details'>
          <h2>{title}</h2>
          <h3>{publishedDate}</h3>
          <p>{blurb}</p>
          <Link to={`${id}`}>
            <h4>Read More</h4>
          </Link>
        </div>
    </div>
  )
}
