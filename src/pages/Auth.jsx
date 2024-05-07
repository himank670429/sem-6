import { doSignInWithGoogle } from "../utils/auth";
import { useAuth } from "../context/AuthContext";
import { Navigate} from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
export function Login() {
	const { userLoggenIn } = useAuth();
	async function handleLogin() {
		await doSignInWithGoogle();
	}
	if (userLoggenIn) {
		return <Navigate to="/"/>;
	}
	return (
		<div className="size-full h-screen flex justify-center items-center gap-4 flex-col">
			<div className="bg-dark-100 p-8 rounded-xl gap-8 flex flex-col mx-4 shadow my-auto">
				<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">Welcome to sem-6,</h1>
				<p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center">
					this website will give you all the academic resource you need for semester
					6.
				</p>
				<p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-center">Login with Google to continue</p>
				<button
					onClick={handleLogin}
					className="btn text-sm sm:text-lg md:text-xl lg:text-2xl self-center font-semibold"
				>
					login with
					<GoogleIcon />
				</button>
			</div>
			<div className="self-center mb-[1rem] text-light-200 relative font-semibold">
				<a href="#" className="absolute right-3 whitespace-nowrap">
					Terms and condition
				</a>
				<span>|</span>
				<a href="#" className="absolute left-3 whitespace-nowrap">
					Privacy Policy
				</a>
			</div>
		</div>
	);
}

export function LoadingScreen() {
	return (
		<div className="size-full h-screen flex justify-center items-center gap-4 flex-col">
			<h1 className="text-4xl font-bold">Loading user data....</h1>
			<div
				style={{ borderTopColor: "transparent" }}
				className="inline-block size-[40px] border-8 border-light-200 rounded-full animate-spin"
			/>
		</div>
	);
}
