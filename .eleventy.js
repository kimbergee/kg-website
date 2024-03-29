module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addWatchTarget("src/js/");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/js/skrollr.min.js");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/downloads");

  const site = require('./src/_data/site.json');

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}