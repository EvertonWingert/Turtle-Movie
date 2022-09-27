import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "./components/Header"
import { Detail } from './pages/Detail/Detail'
import { Persons } from './pages/Persons/Persons'
import { Err } from './pages/Err/Err'
import { Home } from './pages/Home/home'
import { Movies } from './pages/Movies/Movies'
import { Serie } from './pages/Series/Series'
import GlobalStyle from './styles/global'
import { Person } from './pages/Persons/Person'

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
          {/* <Route path="/*" element={<Err />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
