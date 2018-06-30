const { Asset } = require("parcel-bundler");
const MDXC = require("mdxc");

class MdxcAsset extends Asset {
  constructor(...args) {
    super(...args);
    this.type = "js";
  }

  async generate() {
    const config = await this.getConfig(
      [".mdxcrc", "mdxc.config.js", "package.json"],
      { packageKey: "mdxc" }
    );

    const mdx = new MDXC(
      Object.assign(
        {
          commonJS: false,
          linkify: true,
          highlight: false,
        },
        config
      )
    );

    return [
      {
        type: "js",
        value: mdx.render(this.contents),
      },
    ];
  }
}

module.exports = MdxcAsset;
