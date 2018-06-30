import Mdx from "./index.md";

import React from "react";
import ReactDOM from "react-dom";

const factories = {
  h1: (props, children) => (
    <h1 style={{ color: "red" }} {...props}>
      {children}
    </h1>
  ),
};

ReactDOM.render(<Mdx factories={factories} />, document.querySelector("#root"));
