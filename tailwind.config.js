/** @type {import('tailwindcss').Config} */

export default {
	content: ["./src/**/*.{html,js,njk,md}"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				base: {
					light: "#fff6ee",
					dark: "#22296B",
				},
				main: {
					light: "#f2ae83",
					dark: "#035C9E",
				},
				imp: {
					light: "#11514E",
					dark: "#ED3659",
				},
				normal: {
					light: "#FE9C9B",
					dark: "#FE9600",
				},
				rest: {
					light: "#FFFFFF",
					dark: "#000000",
				},
				text: {
					light: "#191919",
					dark: "#FFFFFF",
				},
			},
		},
	},
	plugins: [],
};
