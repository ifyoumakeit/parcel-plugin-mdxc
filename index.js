module.exports = function(bundler) {
  bundler.addAssetType("md", require.resolve("./MarkdownAsset.js"));
  bundler.addAssetType("mdx", require.resolve("./MarkdownAsset.js"));
};
