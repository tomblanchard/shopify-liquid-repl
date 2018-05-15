import React from "react";
import { render } from "react-dom";

import { AppProvider } from "@shopify/polaris";

import EditorContainer from "./component-editor-container";

var Index = (props) => (
  <AppProvider>
    <EditorContainer />
  </AppProvider>
);

render(
  <Index />,
  document.querySelector("#index")
);
