import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Detail } from './pages/detail/detail'
import { Persons } from './pages/person/persons'
import { Err } from './pages/err/err'
import { Home } from './pages/home/home'
import { Movie } from './pages/movie/movie'
import { Serie } from './pages/serie/serie'
import GlobalStyle from './styles/global'
import { Person } from './pages/person/person'

function App() {
  return (
    <div>
      <Router>
      <GlobalStyle />
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/serie" element={<Serie />} /> 
          <Route path="/persons" element={<Persons />} /> 
          <Route path="/detail/:type/:id" element={<Detail /> } />
          <Route path="/person/:id" element={<Person /> } />
          <Route path="/*" element={<Err />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
