/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				dark: {
					50: "#16181D",
					100: "#1D2026",
					200: "#25282E",
				},
				purple: "#6859CB",
				light: {
					100: "#3A3C46",
					200: "#ABB2BF",
				},
			},
		},
	},
	plugins: [],
};
