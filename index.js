module.exports = function(bundler) {
  bundler.addAssetType("md", require.resolve("./MDXCAsset.js"));
  bundler.addAssetType("mdx", require.resolve("./MDXCAsset.js"));
};
