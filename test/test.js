const path = require("path");
const MDXCAsset = require("../MDXCAsset");
const Parser = require("parcel-bundler/src/Parser");

describe("MDXCAsset", () => {
  it("should parse markdown correctly.", async () => {
    const asset = new MDXCAsset(
      path.resolve(__dirname, "./index.md"),
      {
        rootDir: __dirname,
      }
    );
    const processed = await asset.process();
    expect(processed[0].value).toMatchSnapshot();
  });
  it("should parse with preact.", async () => {
    const asset = new MDXCAsset(
      path.resolve(__dirname, "./index.md"),
      {
        rootDir: __dirname,
        parser: new Parser(),
        publicURL: "/",
      },
      {
        mdxc: {
          pragma: "preact.h",
          imports: [
            'import preact, { h } from "preact"',
            "const createFactory = tagName => (...args) => h(tagName, ...args)",
          ],
        },
      }
    );
    const processed = await asset.process();
    expect(processed[0].value).toMatchSnapshot();
  });

  it("should parse config with images correctly.", async () => {
    const asset = new MDXCAsset(path.resolve(__dirname, "./index.img.md"), {
      rootDir: __dirname,
      parser: new Parser(),
      publicURL: "/",
    });
    const processed = await asset.process();
    expect(processed[0].value).toMatchSnapshot();
  });
});
