import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Playlist from "./pages/Playlist";
function App() {
	return (
		<>
			<h1 className="text-3xl mt-4 font-bold self-center">
				{"BSc (Hons.) CS Hons"}
			</h1>
			<h1 className="text-3xl mb-4 font-bold self-center">{"Sem-6"}</h1>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Books />} path="/book/:id" />
				<Route element={<Playlist />} path="/playlist/:id" />
			</Routes>
		</>
	);
}
export default App;
