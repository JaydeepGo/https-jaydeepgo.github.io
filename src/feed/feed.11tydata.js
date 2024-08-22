import site from "../_data/site.js";

export default {
	metadata: {
		title: site.rss.title,
		subtitle: site.rss.subtitle,
		url: site.url,
		feedUrl: site.url + "/feed.xml",
		author: {
			name: site.author,
			email: site.email,
		},
	},
};
