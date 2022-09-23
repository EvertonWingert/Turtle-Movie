import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../../components/Card/Card'
import { Title, CardContainer } from './styles'

export function CardHome() {
  const [trendingMovies, setTrendingMovies] = useState([])
  
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setTrendingMovies(data.results))

      // fetch(
      //   'https://api.themoviedb.org/3/trending/tv/week?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR'
      // )
      // .then(res => res.json())
      // .then(data => setTrendingMovies(data.results))
  }, [])
 
  return (
    <>
      <div>
      <Title>
        <span>Filmes e Series</span> em alta da semana
      </Title>
      <CardContainer>
        {trendingMovies.length > 0 && 
          trendingMovies.map(movie => {
            return (
              <>
                <Cards key={movie.id} movie={movie} />
              </>
            )
          })}
           {/* {trendingTv.length > 0 &&
          trendingTv.map(serie => {
            return (
              <>
                <Cards key={serie.id} movie={serie} />
              </>
            )
          })} */}
      </CardContainer>
      </div>
    </>
  )
}
