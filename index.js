module.exports = function(bundler) {
  bundler.addAssetType("md", require.resolve("./MdxcAsset.js"));
  bundler.addAssetType("mdx", require.resolve("./MdxcAsset.js"));
};
