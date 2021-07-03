module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("src/scss/");
  eleventyConfig.addPassthroughCopy("src/img");
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