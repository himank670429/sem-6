import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
export function Login() {
	const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
	const navigate = useNavigate();
	async function handleLogin() {
		signInWithGoogle();
	}
	if (user) {
		navigate("/");
	}

	if (loading) {
		return <LoadingScreen />;
	}
	return (
		<div className="size-full h-screen flex justify-center items-center gap-4 flex-col">
			<div className="bg-dark-100 p-8 rounded-xl gap-8 flex flex-col w-[700px] shadow my-auto">
				<h1 className="text-4xl text-center">Welcome to sem-6,</h1>
				<p className="text-2xl text-center">
					this website will give you all the academic resource you need for semester
					6.
				</p>
				<p className="text-xl text-center">Login with Google to continue</p>
				<button
					onClick={handleLogin}
					className="btn self-center text-lg font-semibold"
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

function LoadingScreen() {
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
