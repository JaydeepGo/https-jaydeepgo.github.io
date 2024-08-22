const config = {
	trailingComma: "es5",
	semi: true,
	singleQuote: false,
	useTabs: true,
	printWidth: 130,
	htmlWhitespaceSensitivity: "ignore",
	plugins: ["prettier-plugin-jinja-template"],
	overrides: [
		{
			files: ["*.njk"],
			options: {
				parser: "jinja-template",
			},
		},
	],
};

export default config;
