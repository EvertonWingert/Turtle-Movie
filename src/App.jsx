import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/home/home'
import { Movies } from './pages/movies/movies'
import { Series } from './pages/series/series'
import { Detail } from './pages/detail/detail'
import { Persons } from './pages/persons/persons'
import { Person } from './pages/persons/person'
import { Search } from './pages/search/search'
import { Random } from './pages/random/random'
import GlobalStyle from './styles/global'


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/persons" element={<Persons />} />
        <Route path="/detail/:type/:id" element={<Detail />} />
        <Route path="/person/:id" element={<Person />} />
        <Route path="/random" element={<Random />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
