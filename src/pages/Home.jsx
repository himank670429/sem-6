import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { WarningMessage, NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<WarningMessage msg={"Computer graphics book1 is incorrect and will be updated soon with the correct edition"}/>
			<NotificationMessage msg={"checout computer graphics playlist"} />
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
