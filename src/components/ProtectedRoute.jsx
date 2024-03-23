import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../context/AuthContext";
import Header from "./Header";
function ProtectedRoute() {
	const { userInfo, loading, error } = useUser();
	if (userInfo) {
		return (
			<>
				<Header />
				<Outlet />
			</>
		);
	} else if (loading) {
		return <p>loading...</p>;
	}
	return <Navigate to="/" />;
}
export default ProtectedRoute;
