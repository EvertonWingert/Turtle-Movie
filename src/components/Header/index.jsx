import { Link } from 'react-router-dom'
import { Logo, Nav, NavMenu, MobileIcon, NavContent } from './styles'
import logo from '/logo.png'

import {
  FaFilm,
  FaHome,
  FaListUl,
  FaAngleDoubleUp,
  FaTv,
  FaSpinner
} from 'react-icons/fa'
import { ImFilm } from 'react-icons/im'
import { List, X } from 'phosphor-react'
import { useState } from 'react'

export function Header() {
  const [click, setClick] = useState(false)

  const handleOpen = () => {
    setClick(!click)
  }

  return (
    <Nav>
      <NavContent>
        <Logo>
          <img src={logo} alt="Logo" />
          <h2>
            Turtle<span>Movie</span>
          </h2>
        </Logo>

        <MobileIcon onClick={handleOpen}>{click ? <X /> : <List />}</MobileIcon>

        <NavMenu onClick={handleOpen} click={click}>
          <ul>
            <Link to="/">
              <FaHome />
              <span>Home</span>
            </Link>

            <Link to="/series/serie">
              <FaTv />
              <span>Series</span>
            </Link>

            <Link to="/movies/movie">
              <FaFilm />
              <span>Movie</span>
            </Link>

            <Link to="/movies/random">
              <FaAngleDoubleUp />
              <span>Popular</span>
            </Link>

            <Link to="/movies/top_ranking">
              <FaListUl />
              <span>Top Ranking</span>
            </Link>

            <Link to="/movies/breve">
              <FaSpinner />
              <span>Em breve</span>
            </Link>
          </ul>
      
        </NavMenu>
      </NavContent>
    </Nav>
  )
}
