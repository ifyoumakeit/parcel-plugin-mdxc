const assert = require("assert");
const path = require("path");
const MarkdownAsset = require("../MarkdownAsset");
const Parser = require("parcel-bundler/src/Parser");

describe("MarkdownAsset", () => {
  it("should parse markdown correctly.", async () => {
    const asset = new MarkdownAsset(path.resolve(__dirname, "./index.md"), {
      rootDir: __dirname,
    });
    const processed = await asset.process();
    expect(processed).toMatchSnapshot();
  });
  it("should parse markdown with images correctly.", async () => {
    const asset = new MarkdownAsset(path.resolve(__dirname, "./index.img.md"), {
      rootDir: __dirname,
      parser: new Parser(),
      publicURL: "/",
    });
    const processed = await asset.process();
    expect(processed).toMatchSnapshot();
  });
});
