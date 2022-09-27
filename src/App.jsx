import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './pages/Home/Home'

import { Series } from './pages/Series/Series'
import { Persons } from './pages/Persons/Persons'

import { Person } from './pages/Persons/Person'


import GlobalStyle from './styles/global'


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" index element={<Home />}/>
       
        <Route path="/series" element={<Series />} />
        <Route path="/persons" element={<Persons />} />
        
        <Route path="/person/:id" element={<Person />} />
      </Routes>
    </Router>
  )
}

export default App
