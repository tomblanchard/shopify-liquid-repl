import React from "react";

import {
  Stack,
  ButtonGroup,
  Button,
  Spinner
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var Actions = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <Stack distribution="equalSpacing">
        <Stack alignment="center">
          <Button size="large" primary submit>
            Run
          </Button>

          {context.state.loading && (
            <Spinner size="small" />
          )}
        </Stack>

        <ButtonGroup segmented>
          <Button size="large" onClick={context.handleShare}>
            Share
          </Button>

          <Button size="large" onClick={() => context.handleChange("info", true)}>
            Info
          </Button>
        </ButtonGroup>
      </Stack>
    )}
  </EditorContext.Consumer>
);

export default Actions;
