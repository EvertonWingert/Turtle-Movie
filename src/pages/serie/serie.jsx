import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Cards from '../../components/Card/card'
import {Section, Title, CardContainer } from '../home/styles'

export function Serie() {
  const [trendingMovies, setTrendingMovies] = useState([])
 

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))
  }
 
  return (
    <>
      <Section>
      <Title>
        <span>Series</span>
      </Title>
      <CardContainer>
        {trendingMovies.length > 0 && 
          trendingMovies.map(movie => {
            return (
              <Link 
                to={`${movie ? '' : 'tv'}/detail/tv/${movie.id}`}
              >
                <Cards key={movie.id} movie={movie} />
              </Link>
            )
          })}
      </CardContainer>
      </Section>
    </>
  )
}
