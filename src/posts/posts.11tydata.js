import site from "../_data/site.js";

export default {
	title: "",
	shortDescription: "",
	summary: "",
	author: site.author,
	layout: "post",
	tags: "general",
	permalink: "blog/{{ title | slugify }}/",
	preview: true,
	isExternal: false,
	featuredImage: "",
	isPost: true,
};
