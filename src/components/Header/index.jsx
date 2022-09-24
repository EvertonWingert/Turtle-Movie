import { Link } from 'react-router-dom'
import { Logo, Nav, NavMenu, MobileIcon, NavContent } from './styles'
import logo from '/logo.png'

import {
  FaFilm,
  FaHome,
  FaRandom,
  FaTv,
  FaSpinner,
  FaSearch
} from 'react-icons/fa'
import { List, X } from 'phosphor-react'
import { useState } from 'react'
import { Detail } from '../../pages/detail/detail'

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

            <Link to={`movie/`}>
              <FaFilm />
              <span>Filmes</span>
            </Link>

            <Link to="serie/">
              <FaTv />
              <span>Series</span>
            </Link>

            {/* <Link to="/breve/breve">
              <FaSpinner />
              <span>Em breve</span>
            </Link>  */}

            <Link to="/popular/popular">
              <FaRandom />
              <span>Random</span>
            </Link>

            <Link to="/search">
              <FaSearch />
              <span>Pesquisar</span>
            </Link>
          </ul>
      
        </NavMenu>
      </NavContent>
    </Nav>
  )
}
