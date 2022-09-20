import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
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
          <Route path="movie/:id" element={<Movie />} />
          <Route path="series/:id" element={<Serie />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
