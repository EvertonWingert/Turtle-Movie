import { useEffect } from 'react'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import {
  Container,
  ContentDescription,
  ContentDetail
} from './styles'

export function Detail() {
  const [detail, setDetail] = useState()
  const { id, type } = useParams()

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    getData()
  }, [type])

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/${
        type ? type : 'Erro'
      }/${id}?api_key=cef3d4b27dbae1dfc147a65c011aa68b&language=pt-BR`
    )
      .then(res => res.json())
      .then(data => setDetail(data))
  }

  return (
    <Container>
      <div className="banner">
        <img
          src={`https://image.tmdb.org/t/p/original${
            detail ? detail.backdrop_path : ''
          }`}
        />
      </div>
      <ContentDetail>
        <img
          className="movie__poster"
          src={`https://image.tmdb.org/t/p/original${
            detail ? detail.poster_path : ''
          }`}
        />

        <ContentDescription>
          <div className="movie__detailRightTop">
            <h2>{detail ? detail.title : ''}</h2>
            <h2>{detail ? detail.name : ''}</h2>

            <div className="tagline">
              <b>{detail ? detail.tagline : ''}</b>
            </div>

            <article className="movie__rating">
              <span className="movie__voteCount">
                <FaStar /> {detail ? detail.vote_average : ''}
              </span>
              {detail ? 'votos: (' + detail.vote_count + ')' : ''}
            </article>

            <div className="status">
              <div className="data">
                <p>
                  Status:{' '}
                  <span>
                    {detail?.status === 'Released'
                      ? 'Completo'
                      : 'Em laçamento'}
                  </span>
                </p>
                <p>
                  Lançamento:{' '}
                  <span>
                    {detail?.release_date
                      ? detail?.release_date
                      : 'Não informado'}
                  </span>
                </p>
              </div>
              <p>
                Duração:{' '}
                <span>
                  {detail?.runtime ? detail?.runtime + ' min' : 'Não informado'}
                </span>
              </p>

              <p>
                Produção:{' '}
                {detail &&
                  detail.production_companies &&
                  detail.production_companies.map(company => (
                    <>{company.logo_path && <span>{company.name}</span>}</>
                  ))}
              </p>
            </div>

            <div className="genres">
              {detail && detail.genres
                ? detail.genres.map(genre => (
                    <>
                      <span id={genre.id}>{genre.name}</span>
                    </>
                  ))
                : ''}
            </div>
          </div>

          <div className="description">
            <h3>Sinopse</h3>
            <p>{detail ? detail.overview : ''}</p>
          </div>
        </ContentDescription>
      </ContentDetail>
    </Container>
  )
}
