# Parcel plugin for MDXC

Use React Components with Markdown in Parcel with [MDXC](https://github.com/jamesknelson/mdxc).

Plugin originally forked and modified from [parcel-plugin-markdown](https://github.com/gongpeione/parcel-plugin-markdown).

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

## Run example

```bash
git clone
```
