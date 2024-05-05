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
			<div className="flex flex-col bg-dark-100 p-2 sm:p-4 md:p-8 rounded-xl shadow gap-2">
				<h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl ml-4 sm:ml-2 md:ml-0 font-bold">{name}</h1>
				<h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-purple ml-4 sm:ml-2 md:ml-0 flex items-center gap-2">
					<AccessTimeIcon/>
					{totalTime}
				</h1>
				{videos.map((item, index) => (
					<div
						className="flex flex-col md:flex-row p-4 rounded-lg shadow gap-4  bg-dark-50"
						key={index}
					>
						<div className="flex">
							<span className="text-2xl font-bold self-center w-[40px] hidden md:inline">
								{index + 1}. ​
							</span>
							<Link target="_blank" to={item.video} className="flex-shrink-0 h-[70px] md:h-[100px] bg-black w-[100px] md:w-[150px] relative rounded-md overflow-hidden">
								<img
									className="size-full object-contain object-center rounded-md"
									src={item.thumbnail}
								/>
								<span className="absolute bottom-0 right-0 bg-[#000000cc] m-[1px] px-[3px] rounded-[3px]">
									{item?.time}
								</span>
							</Link>
							<div className="flex flex-col justify-center items-start gap-2">
								<p className="text-xl md:text-2xl lg:text-3xl px-4 text-ellipsis">{item.topic}</p>
								<p className="text-base px-4 text-light-100">{item.publisher}</p>
							</div>
						</div>
						<Link target="_blank" to={item.video} className="items-center flex-nowrap gap-1 bg-purple px-4 py-2 rounded-md text-white hidden md:flex md:ml-auto md:self-end">
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
