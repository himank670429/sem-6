import { useContext, useEffect, useState, createContext } from "react";
import { auth } from "../firebase/init";
import { onAuthStateChanged } from "firebase/auth";
import { LoadingScreen } from "../pages/Auth";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [userLoggenIn, setUserLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, initializeUser);
		return unsubscribe;
	}, []);

	async function initializeUser(user) {
		if (user) {
			setCurrentUser({ ...user });
			setUserLoggedIn(true);
			setLoading(false);
		} else {
			setCurrentUser(null);
			setUserLoggedIn(false);
			setLoading(false);
		}
	}
	console.log("current user - ", currentUser);
	console.log("user logged in - ", userLoggenIn);
	console.log("loading - ", loading);
	return (
		<AuthContext.Provider value={{ currentUser, userLoggenIn, loading }}>
			{loading ? <LoadingScreen/> : children}
		</AuthContext.Provider>
	);
}

export function useAuth() {
	return useContext(AuthContext);
}
