import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Detail } from './pages/Detail/Detail'
import { Persons } from './pages/Persons/Persons'
import { Home } from './pages/Home/Home'
import { Movies } from './pages/Movies/Movies'
import { Serie } from './pages/Series/Series'
import { Person } from './pages/Persons/Person'
import GlobalStyle from './styles/global'
import { Search } from "./pages/search/search"
import { Random } from "./pages/Random/Random"


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/series" element={<Serie />} /> 
          <Route path="/persons" element={<Persons />} /> 
          <Route path="/detail/:type/:id" element={<Detail /> } />
          <Route path="/person/:id" element={<Person /> } />
          <Route path="/random" element={<Random />} />
          <Route path="/search" element={<Search />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
