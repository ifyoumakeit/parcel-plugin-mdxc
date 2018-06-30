# Parcel plugin for MDXC

Use React Components with Markdown in Parcel with [MDXC](https://github.com/jamesknelson/mdxc).

Plugin originally forked and modified from [parcel-plugin-markdown](https://github.com/gongpeione/parcel-plugin-markdown).

Not sure why I didn't just use [https://github.com/hamlim/parcel-plugin-mdx](https://github.com/hamlim/parcel-plugin-mdx). Oh well.

## Usage

```
yarn add --dev parcel-plugin-mdxc
```

```jsx
import React from "react";
import { render } from "react-dom";
import Document from "./Markdown.md";

render(<Document />, document.querySelector("#root"));
```

## Config

[https://github.com/jamesknelson/mdxc#api](MDXC config)

```json
// package.json
// If you want to pass options to mdxc
{
  "name": "ABC",
  "mdxc": {
    "linkify": true,
    "typographer": true
  }
}
```

This plugin also supports config in .mdxcrc, mdxc.config.js.

## Example

```bash
git clone https://github.com/ifyoumakeit/parcel-plugin-mdxc
cd parcel-plugin-mdxc
yarn
cd examples
yarn
yarn start
```

## Tests

Run with Jest.

```bash
yarn test
```

## TODO

- [ ] Add image support

