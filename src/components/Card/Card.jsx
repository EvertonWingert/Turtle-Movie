import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Card, CardContent, Loading } from './styles'
import { FaStar } from 'react-icons/fa'
import { CardContainer } from '../../pages/home/styles'
import { Detail } from '../../pages/detail/detail'

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading ? (
        <Card>
          <Loading />
        </Card>
      ) : (
          <Link
            to={`details/${movie.media_type}/${movie.id}`} 
            style={{width: "200px", marginLeft: "1rem"}}>
          <Card>
            <img
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <CardContent>
              <div>
                <h2>{movie.title}</h2>
                <h2>{movie.name}</h2>
              </div>
                <article>
                  {movie.media_type}
                  <span>
                    <FaStar />
                    {movie.vote_average.toFixed(1)}
                  </span>
                </article>
              <p>{movie.overview.slice(0, 100) + '...'}</p>
            </CardContent>
          </Card>
        </Link>
      )}
    </>
  )
}

export default Cards
