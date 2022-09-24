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
      `https://api.themoviedb.org/3/movie/popular?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }

  return (
    <>
      <Section>
        <Title>
          <span>Filmes</span> populares
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link to={`${movie ? '' : 'movie'}/detail/movie/${movie.id}`}>
                  <Cards key={movie.id} movie={movie} />
                </Link>
              )
            })}
        </CardContainer>
      </Section>
    </>
  )
}
