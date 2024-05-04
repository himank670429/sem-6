import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import Header from "./Header";
import { LoadingScreen } from "../pages/Auth";
function ProtectedRoute() {
	const { userInfo, loading, error } = useUser();

	if (import.meta.env.MODE === "production") {
		if (userInfo) {
			return (
				<>
					<Header />
					<Outlet />
				</>
			);
		} else if (loading) {
			return <LoadingScreen />;
		}
		alert('asdad')
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
