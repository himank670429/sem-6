import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<NotificationMessage msg={"never gonna give you up, never gonna let you down."} />
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
