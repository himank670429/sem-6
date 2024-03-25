import DescriptionIcon from "@mui/icons-material/Description";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookIcon from "@mui/icons-material/Book";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from "react-router-dom";

function SubjectSection({ name, image, syllabus, index, route }) {
	return (
		<section className="bg-dark-100 flex p-6 my-6 mx-4 rounded-xl shadow gap-4">
			<span className="text-2xl font-bold self-center">{index}.</span>
			<img src={image} />
			<p className="text-3xl font-bold self-center px-4">{name}</p>
			<div className="ml-auto flex self-end gap-3 p-3">
				<Link to={`/playlist/${route}`} className="btn">
					<YouTubeIcon />
					playlist
				</Link>
				<Link to={syllabus} target="_blank" className="btn">
					<BookIcon />
					guildlines
				</Link>
				<Link to={`/book/${route}`} className="btn">
					<LibraryBooksIcon />
					books
				</Link>
				<Link to={`/notes/${route}`} className="btn">
					<DescriptionIcon />
					notes
				</Link>
			</div>
		</section>
	);
}

export default SubjectSection;
