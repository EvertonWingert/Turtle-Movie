import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Detail } from './pages/detail/detail'
import { Err } from './pages/err/err'
import { Home } from './pages/home/home'
import { Movie } from './pages/movie/movie'
import { Serie } from './pages/serie/serie'
import GlobalStyle from './styles/global'

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
          <Route path="/detail/:type/:id" element={<Detail /> } />
          <Route path="/*" element={<Err />} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
