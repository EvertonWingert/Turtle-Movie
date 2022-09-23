import { Link } from 'react-router-dom'
import { Logo, Nav, NavMenu, MobileIcon, NavContent } from './styles'
import logo from '/logo-new-aba.png'

import {
  FaFilm,
  FaHome,
  FaListUl,
  FaAngleDoubleUp,
  FaTv,
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

            <Link to="movie/">
              <FaFilm />
              <span>Filmes</span>
            </Link>

            <Link to="serie/">
              <FaTv />
              <span>Series</span>
            </Link>

            {/* <Link to="/popular/popular">
              <FaAngleDoubleUp />
              <span>Popular</span>
            </Link>

            <Link to="/ranking/top_ranking">
              <FaListUl />
              <span>Top Ranking</span>
            </Link>

            <Link to="/breve/breve">
              <FaSpinner />
              <span>Em breve</span>
            </Link> */}
          </ul>
      
        </NavMenu>
      </NavContent>
    </Nav>
  )
}
