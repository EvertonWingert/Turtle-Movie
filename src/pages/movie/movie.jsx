import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../../components/Card/card'
import { Section, Title, CardContainer } from '../home/styles'

export function Movie() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }

  return (
    <>
      <Section>
        <Title>
          <span>Filmes</span> 
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link key={movie.id}  to={`${movie ? '' : 'movie'}/detail/movie/${movie.id}`}>
                  <Cards movie={movie} />
                </Link>
              )
            })}
        </CardContainer>
      </Section>
    </>
  )
}
