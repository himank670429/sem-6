import { useParams, Link } from "react-router-dom";
import data from "../assets/data";
import BookItem from "../components/BookItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
function Books() {
	const { id } = useParams();
	let books = data.subjects.filter((item) => item.route === id)[0].books;
	return (
		<div className="px-8 flex flex-col gap-4">
			<Link className="btn w-fit" to="/">
				<ArrowBackIcon />
				back
			</Link>
			{books.map((item, index) => (
				<BookItem key={index} {...item} index={index + 1} />
			))}
		</div>
	);
}

export default Books;
