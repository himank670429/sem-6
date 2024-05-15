import { useParams } from "react-router-dom";
import data from "../assets/data";
import VideoItem from "../components/VideoItem";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { NotificationMessage } from "../components/Message";
function Playlist() {
	const { id } = useParams();
	let playlist = data.subjects.filter((item) => item.route === id)[0].playlist;
	return (
		<div className="px-2 sm:px-4 md:py-8 flex flex-col gap-4">
			{id === "CG" ? (
				<NotificationMessage msg="unit-6,7 added in computer graphics playlist" />
			) : null}
			<Link className="btn w-fit" to="/">
				<ArrowBackIcon />
				back
			</Link>
			{playlist.map((item, index) => (
				<VideoItem key={index} {...item} index={index} />
			))}
		</div>
	);
}

export default Playlist;
