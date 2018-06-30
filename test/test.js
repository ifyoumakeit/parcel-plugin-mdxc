const path = require("path");
const MdxcAsset = require("../MdxcAsset");
const Parser = require("parcel-bundler/src/Parser");

describe("MdxcAsset", () => {
  it("should parse markdown correctly.", async () => {
    const asset = new MdxcAsset(
      path.resolve(__dirname, "../example/index.js"),
      {
        rootDir: __dirname,
      }
    );
    const processed = await asset.process();
    expect(processed).toMatchSnapshot();
  });
  it("should parse with preact.", async () => {
    const asset = new MdxcAsset(
      path.resolve(__dirname, "./index.md"),
      {
        rootDir: __dirname,
        parser: new Parser(),
        publicURL: "/",
      },
      { mdxc: { pragma: "h" } }
    );
    const processed = await asset.process();
    expect(processed).toMatchSnapshot();
  });

  it("should parse config with images correctly.", async () => {
    const asset = new MdxcAsset(path.resolve(__dirname, "./index.img.md"), {
      rootDir: __dirname,
      parser: new Parser(),
      publicURL: "/",
    });
    const processed = await asset.process();
    expect(processed).toMatchSnapshot();
  });
});
