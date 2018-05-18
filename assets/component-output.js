import React from "react";

import {
  TextField
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var Output = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <TextField
        label="Output"
        placeholder="Read the compiled code code here"
        multiline={15}
        value={context.state.output}
        readOnly
      />
    )}
  </EditorContext.Consumer>
);

export default Output;
