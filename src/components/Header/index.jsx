import { Link } from 'react-router-dom'
import { Logo, Nav, NavMenu, MobileIcon, NavContent } from './styles'
import logo from '/logo.png'

import {
  FaFilm,
  FaHome,
  FaListUl,
  FaRandom,
  FaSearch,
  FaSpinner
} from 'react-icons/fa'
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

            <Link to="/movies/popular">
              <FaFilm />
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

            <Link to="/movies/random">
              <FaRandom />
              <span>Random</span>
            </Link>

            <Link to={`/search`}>
              <FaSearch />
              <span>Pesquisar</span>
            </Link>
          </ul>
      
        </NavMenu>
      </NavContent>
    </Nav>
  )
}
