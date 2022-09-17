import { Link } from 'react-router-dom';
import { Logo, Nav, NavMenu, Form } from './styles'
import logo from '../../assets/logo.png'

import { FaFilm, FaHome, FaListUl, FaRandom, FaSearch, FaSpinner } from "react-icons/fa";

export function Header() {
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="Logo" />
        <h2>Turtle<span>Movie</span></h2>
      </Logo>

      <NavMenu>
        <ul>
          <Link to="/">
            <FaHome/>
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
        </ul>
      </NavMenu>  

      
      {/* <Form>
        <input type="text" placeholder='Busque um filme' />
        <button type='submit'> <FaSearch /> </button>          
      </Form> */}
  </Nav>
  )
}