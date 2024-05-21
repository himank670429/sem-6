import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<NotificationMessage msg={"AI playlist is being updated, do check it out"} />
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
