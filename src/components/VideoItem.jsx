import { Link } from "react-router-dom";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { calcSeconds, calcTimeFormated } from "../utils/timeFormat";
import AccessTimeIcon from "@mui/icons-material/AccessTimeFilled";
function VideoItem({ name, videos }) {
	const totalTime = calcTimeFormated(
		videos.reduce((acc, item) => acc + calcSeconds(item?.time), 0)
	);
	return (
		<>
			<div className="flex flex-col bg-dark-100 p-8 rounded-xl shadow gap-2">
				<h1 className="text-4xl font-bold">{name}</h1>
				<h1 className="text-2xl font-bold text-purple flex items-center gap-2">
					<AccessTimeIcon />
					{totalTime}
				</h1>
				{videos.map((item, index) => (
					<div className="flex p-4 rounded-lg shadow gap-4 bg-dark-50" key={index}>
						<span className="text-2xl font-bold self-center ">{index + 1}.</span>
						<div className="flex-shrink-0 h-[100px] bg-black w-[150px] relative rounded-md overflow-hidden">
							<img
								className="size-full object-contain object-center rounded-md"
								src={item.thumbnail}
							/>
							<span className="absolute bottom-0 right-0 bg-[#000000cc] m-[1px] px-[3px] rounded-[3px]">
								{item?.time}
							</span>
						</div>
						<div className="flex flex-col justify-center items-start gap-2">
							<p className="text-3xl px-4 text-ellipsis">{item.topic}</p>
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
