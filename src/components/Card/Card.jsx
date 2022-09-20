import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { Card, CardContent } from "./styles"

const Cards = ({ movie, showLink = true }) => {
  return (
    <Link to={`/:id`} style={{textDecoration:"none", color:"white"}}>
            <Card>
                <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <CardContent>
                    <div className="card__title">
                        <h2>{movie.title}</h2>
                        <h2>{movie.name}</h2>
                    </div>
                    <span>
                        <FaStar />
                        {movie.vote_average.toFixed(1)}
                    </span>
                    <p>{movie.overview.slice(0,100)+"..."}</p>
                </CardContent>
            </Card>
        </Link>
  )
}

export default Cards