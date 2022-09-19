import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Image, Content } from "./styles"
import { Star, StarFour } from "phosphor-react"
import { FaStar } from "react-icons/fa"
  
export function Slider() {
  const [ popularMovies, setPopularMovies ] = useState([])

  useEffect(() => {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR")
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
        popularMovies.map(movie => {
          return (
            <Link key={movie.id} to={`/movies${movie.id}`} >
            <Image>
              <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
            </Image>
            <Content>
              <h1>{movie ? movie.original_title: ""}</h1>
              <div>
                 <article>
                    {movie ? movie.release_date: ""}
                    <span>
                      <FaStar />
                      {movie ? movie.vote_average: ""}
                    </span>
                 </article>

                <p>{movie ? movie.overview: ""}</p>
              </div>

            </Content>

            
          </Link>
          )
        })
      }
    </Carousel>
  )
}