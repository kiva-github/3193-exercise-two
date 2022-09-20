import { useParams } from 'react-router'

// styles
import './ArticlePage.scss'

// data
import data from '../../data'

export default function ArticlePage() {
  const { id } = useParams()

  return (
    <div>
      {data.map((article) => {
        if (article.id === id) {
          const { id, title, publishedDate, blurb, articleText} = article
          return (

            <div key={id} className='article-page-container'>
              
              <div className='article-header'>
                <h1>{title}</h1>
                <h5>{publishedDate}</h5>
                <p>{blurb}</p>
              </div>

              <div className='article-content'>
                {articleText.map((text) => {
                  switch (text.type) {
                    case 'p':
                      return (
                        <p key={text.data}>{text.data}</p>
                      )
                    case 'h2':
                      return (
                        <h2 key={text.data}>{text.data}</h2>
                      )
                    case 'h3':
                      return (
                        <h3 key={text.data}>{text.data}</h3>
                      )
                    default:
                      return (
                        <p key={Math.random()}>{'unknown text type'}</p>
                      )
                  }
                })}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}
