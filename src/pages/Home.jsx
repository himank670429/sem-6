import data from "../assets/data";
import SubjectSection from "../components/SubjectSection";
import WarningIcon from '@mui/icons-material/Warning';
function Home() {
	return (
		<>
		<div className="bg-dark-50 p-4 mx-4 rounded-lg "><WarningIcon/> The playlist is incomplete is constanly updated by Himank. Thanks :)</div>
			{data.subjects.map((item, index) => (
				<SubjectSection {...item} key={index} index={index + 1} />
			))}
		</>
	);
}

export default Home;
