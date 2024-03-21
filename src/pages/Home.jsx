import data from "../assets/data.json";
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
