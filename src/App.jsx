import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home/Home'
import { Movies } from './pages/Movies/Movies'
import { Series } from './pages/Series/Series'
import { Detail } from './pages/Detail/Detail'
import { Persons } from './pages/Persons/Persons'
import { Person } from './pages/Persons/Person'
import { Search } from './pages/Search/Search'
import { Random } from './pages/Random/Random'
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
