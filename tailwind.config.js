/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			backgroundColor: {
				'white-alpha-50': 'rgba(255, 255, 255, 0.5)',
			}
		},
	},
	plugins: [],
};
