import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
function VideoItem({ name, videos }) {
	return (
		<>
			<div className="flex flex-col bg-dark-100 p-8 rounded-xl shadow gap-2">
				<h1 className="text-3xl font-bold">{name}</h1>
				{videos.map((item, index) => (
					<div className="flex p-4 rounded-lg shadow gap-4 bg-dark-50" key={index}>
						<span className="text-2xl font-bold self-center">{index + 1}.</span>
						<img
							className="h-[100px] w-[150px] object-cover rounded-md"
							src={item.thumbnail}
						/>
						<div className="flex flex-col justify-center items-start gap-2">
							<p className="text-3xl px-4">{item.topic}</p>
							<p className="text-base px-4 text-light-100">{item.publisher}</p>
						</div>
						<Link target="_blank" to={item.video} className="ml-auto self-end btn">
							<PlayCircleIcon />
							watch video
						</Link>
					</div>
				))}
			</div>
		</>
	);
}

export default VideoItem;
