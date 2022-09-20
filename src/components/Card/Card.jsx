import {useEffect, useState} from "react"

import "./styles.css"
import { Link } from "react-router-dom"

const Cards = ({ movie, showLink = true }) => {
  return (
    <Link to={`/:id`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />
                <div className="cards__overlay">
                    <div className="card__title"><h2>{movie.title}</h2></div>
                    <div className="card__runtime">
                        {movie.release_date}
                        <span className="card__rating">{movie.vote_average}</span>
                    </div>
                    <div className="card__description">{movie.overview.slice(0,118)+"..."}</div>
                </div>
            </div>
        </Link>
  )
}

export default Cards