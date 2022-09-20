import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../../components/Card/Card'

export function CardMovie() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/week?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR'
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }, [])

  return (
    <div>
      {trendingMovies.length > 0 &&
        trendingMovies.map(movie => {
          return <Cards key={movie.id} movie={movie} />
        })}
    </div>
  )
}
