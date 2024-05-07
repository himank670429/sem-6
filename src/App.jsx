import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Playlist from "./pages/Playlist";
import PYQ from "./pages/PYQS";
import { Login } from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<Routes>
				<Route element={<Login />} path="/login" />
				<Route element={<ProtectedRoute />}>
					<Route element={<Home />} path="/" />
					<Route element={<Books />} path="/book/:id" />
					<Route element={<Playlist />} path="/playlist/:id" />
					<Route element={<PYQ />} path="/PYQS/:id" />
				</Route>
			</Routes>
		</>
	);
}
export default App;
