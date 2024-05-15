import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { WarningMessage, NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<NotificationMessage msg={"checkout computer graphics playlist"} />
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
