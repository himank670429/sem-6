import { auth } from "../firebase/init";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
	const [user, loading, error] = useAuthState(auth);
	const [userInfo, setUserInfo] = useState(null);
	useEffect(() => {
		if (user) {
			setUserInfo({
				name: user.displayName,
				image: user.photoURL,
				email: user.email,
			});
		}
	}, [user]);
	return (
		<AuthContext.Provider value={{ userInfo, loading, error }}>
			{children}
		</AuthContext.Provider>
	);
}

export function useUser() {
	const { userInfo, loading, error } = useContext(AuthContext);
	return { userInfo, loading, error };
}
