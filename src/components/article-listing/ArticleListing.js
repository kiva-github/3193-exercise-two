import { useMemo } from 'react'
import { Link } from 'react-router-dom'

// styles
import './ArticleListing.scss'

export default function ArticleListing({ article }) {
  const { title, blurb, id, image } = article

  const date = useMemo(() => {
    if(!article.publishedDate) return ''
    const parsedDate = new Date(article.publishedDate)
    return parsedDate.toDateString()
    }, [article])

  return (
    <div className='article-listing-container'>
        <img src={image.url} alt={image.alt}/>
        <div className='article-details'>
          <h2>{title}</h2>
          <h5>{date}</h5>
          <p>{blurb}</p>
          <Link to={`${id}`}>
            <h4>Read More</h4>
          </Link>
        </div>
    </div>
  )
}
