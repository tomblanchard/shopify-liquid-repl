import React from "react";

import {
  TextField
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var Input = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <TextField
        label="Input"
        name="input"
        placeholder="Write Liquid code here"
        multiline={15}
        value={context.state.input}
        onChange={(value) => context.handleChange("input", value)}
        disabled={context.state.loading}
      />
    )}
  </EditorContext.Consumer>
);

export default Input;
