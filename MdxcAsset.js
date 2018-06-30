const { Asset } = require("parcel-bundler");
const MDXC = require("mdxc");

const CONFIG_FILES = [".mdxcrc", "mdxc.config.js", "package.json"];

class MdxcAsset extends Asset {
  constructor(name, pkg, options = {}) {
    super(name, pkg, options);
    this.type = "js";
    this.mdxc = options.mdxc;
  }

  async generate() {
    const config = await this.getConfig(CONFIG_FILES, {
      packageKey: "mdxc",
    });

    const mdx = new MDXC(
      Object.assign(
        {
          linkify: true,
          highlight: false,
        },
        config || this.mdxc || {}
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
