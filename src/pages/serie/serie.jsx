// import { useEffect } from 'react'
// import { useState } from 'react'
// import { useParams } from 'react-router-dom'
import { Slider } from '../../components/Slider'

export function Serie() {
  // const [currentSerieDetail, setSeries] = useState()
  // const { id } = useParams()

  // useEffect(() => {
  //   fetch(
  //     `https://api.themoviedb.org/3/tv/${id}?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR`
  //   )
  //     .then(response => response.json())
  //     .then(data => setSeries(data))
  // }, [])

  return (
    <div>
     <Slider />
      
    </div>
  )
}
