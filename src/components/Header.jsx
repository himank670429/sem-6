import { useNavigate } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../firebase/init";
import { useUser } from "../context/AuthContext";
import LogoutIcon from "@mui/icons-material/Logout";
function Header() {
	const navigate = useNavigate();
	const [signOut, signOutLoading, signOutError] = useSignOut(auth);
	const { userInfo } = useUser();
	return (
		<header className="w-full flex border-b-2 border-light-100 py-4 px-4 gap-8 items-center my-4">
			<img className="h-[60px]" src="/icon.png" />
			<div className="flex flex-col">
				<h1 className="text-4xl font-bold">{"Sem-6"}</h1>
				<h1 className="text-xl font-bold">{"BSc (Hons.) CS Hons"}</h1>
			</div>
			<div className="ml-auto flex items-center gap-4">
				<img className="size-[40px] rounded-full" src={userInfo?.image} />
				<button
					onClick={async () => {
						const success = await signOut();
						if (success) {
							navigate("/login");
						}
					}}
					className="btn self-center"
				>
					<LogoutIcon />
					logout
				</button>
			</div>
		</header>
	);
}

export default Header;
