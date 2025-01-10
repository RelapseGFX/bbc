module.exports = function(eleventyConfig) {

    eleventyConfig.addFilter("contains", (haystack=[], needle="") => {
        return haystack.some(hay => needle.includes(hay));
      });

    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/app.js');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/article.css');

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}