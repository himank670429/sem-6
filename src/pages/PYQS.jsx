import { useParams } from "react-router-dom";
import data from "../assets/data";
import PYQItem from "../components/PYQ";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function PYQ() {
	const { id } = useParams();
	let playlist = data.subjects.filter((item) => item.route === id)[0].PYQS;
	return (
		<div className="px-8 flex flex-col gap-4">
			<Link className="btn w-fit" to="/">
				<ArrowBackIcon />
				back
			</Link>
			{playlist.map((item, index) => (
				<PYQItem key={index} {...item} index={index+1} />
			))}
		</div>
	);
}

export default PYQ;
