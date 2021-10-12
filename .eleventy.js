module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/img");
  // Return your Object options:
  return {
    dir: {
      input: "src",
      output: "docs"
    }
  }
};