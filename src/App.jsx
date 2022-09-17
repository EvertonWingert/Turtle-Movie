import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from "./components/Header"
import { Slider } from "./components/Slider"
import GlobalStyle from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Slider />
        <Routes>
          <Route index element={<h1>hello</h1>}></Route>
          <Route path="movie/:id" element={<h1>Movie detail</h1>}></Route>
          <Route path="movies/:type" element={<h1>Movie List</h1>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>

       {/* <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search" element={<Search />} />
          <Route path="/breve" element={<Breve />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/random" element={<Random />} />
      </Routes> */}
    </BrowserRouter>
  )
}

export default App
