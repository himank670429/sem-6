import subjects from "./subjects/init";

export default {
	timetable: "",
	subjects: [
		{
			name: "Artificial Intelligence",
			image: "/subjects/AI.png",
			route: "AI",
			syllabus:
				"https://drive.google.com/file/d/1L_t1blATauXhoPPex0ivnOLWbDAGE3eg/view?usp=drive_link",
			books: subjects.AI.books,
			playlist: subjects.AI.playlist,
			PYQS: subjects.AI.PYQS,
		},
		{
			name: "Data Mining",
			image: "/subjects/DM.png",
			route: "DM",
			syllabus:
				"https://drive.google.com/file/d/1LaLxWT7w6kBlnWJu2jPqu4VL_ctLAS6l/view?usp=drive_link",
			books: subjects.DM.books,
			playlist: subjects.DM.playlist,
			PYQS: subjects.DM.PYQS,
		},
		{
			name: "Machine Learning",
			image: "/subjects/ML.png",
			route: "ML",
			syllabus:
				"https://drive.google.com/file/d/1FqiT59x_RUMpVe1L423fKvMWWQjY89T-/view?usp=drive_link",
			books: subjects.ML.books,
			playlist: subjects.ML.playlist,
			PYQS: subjects.ML.PYQS,
		},
		{
			name: "Computer Graphics",
			image: "/subjects/CG.png",
			route: "CG",
			syllabus:
				"https://drive.google.com/file/d/1JB_hXUC8lp9OlpyZRTkvwmEa1k_ItP5f/view?usp=drive_link",
			books: subjects.CG.books,
			playlist: subjects.CG.playlist,
			PYQS: subjects.CG.PYQS,
		},
	],
};