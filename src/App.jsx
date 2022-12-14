import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Home } from "./pages/home/home";

import { Movies } from "./pages/Movies/Movies";
import { Series } from "./pages/Series/Series";
import { Persons } from "./pages/Persons/Persons";
import { Detail } from "./pages/Detail/Detail";
import { Person } from "./pages/Persons/Person";

import GlobalStyle from "./styles/global";

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
			</Routes>
		</BrowserRouter>
	);
}

export default App;
