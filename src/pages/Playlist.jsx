import { useParams } from "react-router-dom";
import data from "../assets/data";
import VideoItem from "../components/VideoItem";
import {Link} from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Playlist() {
	const { id } = useParams();
	let playlist = data.subjects.filter((item) => item.route === id)[0].playlist;
	return (
		<div className="px-8 flex flex-col gap-4">
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
