import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import { LoadingScreen } from "../pages/Auth";
function ProtectedRoute() {
	const { currentUser, loading } = useAuth();

	if (import.meta.env.MODE === "production") {
		if (currentUser) {
			return (
				<>
					<Header />
					<Outlet />
				</>
			);
		} else if (loading) {
			return <LoadingScreen />;
		}
		return <Navigate to="/login" />;
	} else {
		return (
			<>
				<Header />
				<Outlet />
			</>
		);
	}
}
export default ProtectedRoute;
