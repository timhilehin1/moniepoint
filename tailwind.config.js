/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				bgColor: "#F3F3F3",
				headerColor: "#3556AB",
				baseTextColor: "#071D55",
			},
			boxShadow: {
				right: "15px 0 15px -15px rgba(0, 0, 0, 0.15)",
			},
		},
	},
	plugins: [],
};
