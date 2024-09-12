export default {
	title: "Jaydeep Godara",
	author: "JaydeepGo",
	url: "https://jaydeepgo.com",
	email: "jaydeep@mail.com",
	summary: "I do random stuff.",
	profilePic: "pc.jpg",
	rss: {
		title: "heeee",
		subtitle: "I am writing about my experiences as a naval navel-gazer.",
	},
	pathPrefix: "",
	version: version(),
};

function version() {
	return process.env.NODE_ENV == "test" ? "1667346692531" : String(Date.now());
}
