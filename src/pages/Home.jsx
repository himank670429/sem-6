import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
function Home() {

	return (
		<>
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
