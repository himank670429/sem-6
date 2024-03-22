import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
function BookItem({ index, image, name, url }) {
	return (
		<div className="flex bg-dark-100 p-8 rounded-xl shadow gap-2">
			<span className="text-2xl font-bold self-center">{index}.</span>
			<img
				className="rounded-lg h-[200px] w-[150px] flex-shrink-0 object-cover"
				src={image}
			/>
			<p className="text-2xl font-bold self-center px-4">{name}</p>
			<Link className="ml-auto self-end btn" target="_blank" to={url}>
				<LinkIcon />
				view
			</Link>
		</div>
	);
}

export default BookItem;
