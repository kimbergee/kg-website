module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/fonts");
  eleventyConfig.addPassthroughCopy("src/js");

  const site = require('./src/_data/site.json');

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
}