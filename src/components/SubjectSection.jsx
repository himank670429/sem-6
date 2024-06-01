import DescriptionIcon from "@mui/icons-material/Description";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from "react-router-dom";

function SubjectSection({ name, image, syllabus, index, route }) {
	return (
		<section className="bg-dark-100 flex flex-col md:flex-row p-6 my-6 mx-4 rounded-xl shadow gap-4">
			<span className="text-2xl font-bold self-center hidden md:inline">
				{index}.
			</span>
			<img src={image} />
			<p className="text-2xl md:text-3xl font-bold self-center px-4 text-nowrap">
				<span className="md:hidden">{index}.</span> {name}
			</p>
			<div className="md:ml-auto grid grid-cols-2 grid-rows-2 md:grid-rows-4 md:grid-cols-none lg:grid-cols-2 lg:grid-rows-2 xl:flex flex-wrap self-center md:self-end gap-3 p-3">
				<Link to={`/playlist/${route}`} className="btn">
					<YouTubeIcon />
					playlist
				</Link>
				<Link to={syllabus} target="_blank" className="btn-2">
					<BookIcon />
					guildlines
				</Link>
				<Link to={`/book/${route}`} className="btn-2">
					<LibraryBooksIcon />
					books
				</Link>
				<Link to={`/PYQS/${route}`} className="btn-2">
					<DescriptionIcon />
					PYQ
				</Link>
			</div>
		</section>
	);
}

export default SubjectSection;
