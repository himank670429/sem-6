import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import { WarningMessage, NotificationMessage } from "../components/Message";
function Home() {
	return (
		<>
			<WarningMessage msg={"The playlist is incomplete and is constanly being updated by Himank. Thanks :)"}/>
			<NotificationMessage msg={"ML playlist is completed :)"} />
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
