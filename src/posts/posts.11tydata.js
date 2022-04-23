const site = require('../_data/site.js');

module.exports = {
  layout: 'post',
  tags: 'local-post',
  permalink: 'blog/{{ title | slugify }}/',
  preview: true,
  author: site.author,
};
