import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
function PYQItem({ index, name, url }) {
	return (
		<div className="flex bg-dark-100 p-8 rounded-xl shadow gap-2">
			<span className="text-2xl font-bold self-center">{index}.</span>
			<p className="text-2xl font-bold self-center px-4">{name}</p>
			<Link className="ml-auto self-end btn" target="_blank" to={url}>
				<LinkIcon />
				view
			</Link>
		</div>
	);
}

export default PYQItem;