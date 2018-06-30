const { Asset } = require("parcel-bundler");
const MDXC = require("mdxc");

class MarkdownAsset extends Asset {
  constructor(name, options) {
    super(name, options);
    this.type = "js";
    this.mdxOptions = options.mdx;

    this.mdx = new MDXC(
      Object.assign(
        {
          linkify: true,
          typographer: true,
        },
        options.mdx
      )
    );
  }

  parse(code) {
    this.contents = this.mdx.render(code);
    return super.parse(this.contents);
  }
}

module.exports = MarkdownAsset;
