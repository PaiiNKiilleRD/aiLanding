/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			padding: "15px",
		}, screens: {
			sm: "640px",
			md: "768px",
			lg: "960px",
			xl: "1200px",
		},
		extend: {
			colors: {
				primary: "#CE5120",
				secondary: "#0065C4",
				myWhite: "#E7E7E7",
			}, fontFamily: {
				inter: ["Inter", "Helvetica"],
			},
		},
	},
	plugins: [],
}
