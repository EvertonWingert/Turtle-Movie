import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Image, Content } from "./styles"
import { FaStar } from "react-icons/fa"
  
export function Slider() {
  const [ popularMovies, setPopularMovies ] = useState([])

  useEffect(() => {
      fetch("https://api.themoviedb.org/3/trending/all/day?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR")
      .then(res => res.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  return(
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
      interval={5000}
    >
      {
        popularMovies.map(trending => {
          return (
            <Link key={trending.id} to={`details/${trending.media_type}/${trending.id}`} >
            <Image>
              <img src={`https://image.tmdb.org/t/p/original${trending && trending.backdrop_path}`} />
            </Image>
            <Content>
              <h1>{trending ? trending.name : "" }</h1>
              <h1>{trending ? trending.title : "" }</h1> 
              <div>
                 <article>
                      {trending ? trending.media_type : ""}
                    <span>
                      <FaStar />
                      {trending ? trending.vote_average.toFixed(1) : ""}
                    </span>
                 </article>

                <p>{trending ? trending.overview : ""}</p>
              </div>
            </Content>
          </Link>
          )
        })
      }
    </Carousel>
  )
}