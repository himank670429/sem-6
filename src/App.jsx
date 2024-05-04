import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Playlist from "./pages/Playlist";
import { Login } from "./pages/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import { useUser } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

function App() {
	const { userInfo, loading, error } = useUser();
	const navigate = useNavigate();
	useEffect(() => {
		if (!userInfo && !loading) {
			navigate("/login");
		}
	}, [userInfo, loading, navigate]);

	return (
		<>
			<Routes>
				<Route element={<Login />} path="/login" />
				<Route element={<ProtectedRoute />}>
					<Route element={<Home />} path="/" />
					<Route element={<Books />} path="/book/:id" />
					<Route element={<Playlist />} path="/playlist/:id" />
				</Route>
			</Routes>
		</>
	);
}
export default App;
