import { Link } from "react-router-dom";
import LinkIcon from "@mui/icons-material/Link";
function BookItem({ index, image, name, url }) {
	return (
		<div className="flex flex-col lg:flex-row bg-dark-100 p-2 md:p-4 lg:p-8 rounded-xl shadow gap-2">
			<span className="text-2xl font-bold self-center hidden lg:inline">
				{index}.
			</span>
			<Link target="_blank" to={url} className="self-center">
				<img
					className="rounded-lg size-full h-[200px] w-[150px] flex-shrink-0 object-cover"
					src={image}
				/>
			</Link>
			<p className="text-base sm:text-lg md:text-xl lg:text-2xl flex gap-2 font-bold self-center px-4">
				<span className="lg:hidden">{index}.</span>
				<span className="text-wrap">{name}</span>
			</p>
			<Link
				className="items-center flex-nowrap gap-1 bg-purple px-4 py-2 rounded-md text-white hidden lg:flex lg:ml-auto lg:self-end"
				target="_blank"
				to={url}
			>
				<LinkIcon />
				view
			</Link>
		</div>
	);
}

export default BookItem;
