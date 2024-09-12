import "dotenv/config";

import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import pluginRss from "@11ty/eleventy-plugin-rss";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import shortcodes from "./src/_11ty/shortcodes.js";

import filters from "./src/_11ty/filters.js";
import site from "./src/_data/site.js";
import tagList from "./src/_11ty/getTagList.js";
/* Markdown Plugins */
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export default async function (eleventyConfig) {
	// Access environment variable
	// process.env.NODE_ENV;

	// add filters
	Object.keys(filters).forEach((filterName) => {
		eleventyConfig.addFilter(filterName, filters[filterName]);
	});

	// add Shortcodes
	Object.keys(shortcodes).forEach((shortcodeName) => {
		eleventyConfig.addShortcode(shortcodeName, shortcodes[shortcodeName]);
	});

	eleventyConfig.addWatchTarget("tailwind.config.js");
	eleventyConfig.addWatchTarget("postcss.config.js");
	eleventyConfig.addWatchTarget("src/css/tailwind.css");

	eleventyConfig.setDataDeepMerge(false);

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addPlugin(syntaxHighlight);

	eleventyConfig.addPassthroughCopy("src/images");
	eleventyConfig.addPassthroughCopy("src/favicon.ico");
	eleventyConfig.addPassthroughCopy("src/jscripts");

	eleventyConfig.addCollection("posts", function (collectionApi) {
		return collectionApi.getFilteredByGlob("./src/posts/*.md");
	});

	eleventyConfig.addCollection("tagList", tagList);

	/* Markdown Plugins */
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options).use(markdownItAnchor));

	return {
		pathPrefix: site.pathPrefix,
		dir: {
			input: "src",
			output: "docs",
			data: "./_data",
			includes: "./_includes",
			layouts: "./_layouts",
		},
		templateFormats: ["md", "njk", "html"],
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
}
