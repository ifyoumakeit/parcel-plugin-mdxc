const { Asset } = require("parcel-bundler");
const MDXC = require("mdxc");

class MarkdownAsset extends Asset {
  constructor(...args) {
    super(...args);
    this.type = "js";

    this.mdx = new MDXC({
      commonJS: true,
      linkify: true,
      highlight: false,
    });
  }

  parse(code) {
    const contents = this.mdx.render(code);
    return super.parse(contents);
  }
}

module.exports = MarkdownAsset;
