import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Home } from './pages/home/home'
import { Search } from './pages/search/search'
import GlobalStyle from './styles/global'

function App() {
  return (
    <div>
      <Router>
      <GlobalStyle />
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="movie/:id" element={<h1>Movie detail</h1>} />
          <Route path="movies/:type" element={<h1>Movie List</h1>} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<h1>Error Page</h1>} />
        </Routes>
    </Router>
    </div>
  )
}

export default App
