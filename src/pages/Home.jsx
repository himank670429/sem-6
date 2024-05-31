import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<div className="mx-4">
				<NotificationMessage
					msg={"DM Playlist abhi baki hai 😅, sorry for the inconvenience"}
				/>
			</div>
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
