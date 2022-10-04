module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/img");
    
    eleventyConfig.addShortcode('img', function (src, alt, width){
        return `<img src="${src}" alt="${alt}" width="${width}" />`;
    });
    
    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};

