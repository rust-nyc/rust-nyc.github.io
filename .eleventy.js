// @ts-check
/**
 * @param {import("@11ty/eleventy").EleventyConfig} eleventyConfig
 * @returns {import("@11ty/eleventy").EleventyReturnValue}
 */
module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy({ "styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({ "*.png": "." });
  eleventyConfig.addPassthroughCopy({ ".well-known": ".well-known" });
  eleventyConfig.addPassthroughCopy({ "CNAME": "CNAME" });

  eleventyConfig.setServerOptions({
    port: 3000
  });

  return {
    dir: {
      input: "content",
      output: "_site",
      includes: "../_includes",
      layouts: "../_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["html", "md", "njk"]
  };
};
