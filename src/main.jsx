import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./stylesheet/index.css";
import { HashRouter } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<AuthProvider>
			<HashRouter>
				<App />
			</HashRouter>
		</AuthProvider>
	</React.StrictMode>
);
