import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Slider } from '../../components/Slider'
import Cards from '../../components/Card/card'
import { Section, Title, CardContainer } from './styles'

export function Home() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }

  return (
    <>
      <Slider />
       <Section>
        <Title>
          <span>Filmes e Series</span> em alta da semana
        </Title>
        <CardContainer>
          {trendingMovies.length > 0 &&
            trendingMovies.map(movie => {
              return (
                <Link key={movie.id} to={`/detail/${movie.media_type}/${movie.id}`}>
                  <Cards movie={movie} />
                </Link>
              )
            })}
        </CardContainer>
      </Section>
    </>
  )
}
