import { useEffect } from 'react'
import { useState } from 'react'
import Cards from '../../components/Card/Card'
import { Title } from './styles'

export function CardTv() {
  const [trendingSeries, setTrendingSeries] = useState([])

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/tv/week?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR'
    )
      .then(res => res.json())
      .then(data => setTrendingSeries(data.results))
  }, [])

  return (
    <div>
      <Title>
        <span>Series</span> em alta da semana
      </Title>
      {trendingSeries.length > 0 &&
        trendingSeries.map(movie => {
          return <Cards key={movie.id} movie={movie} />
        })}
    </div>
  )
}