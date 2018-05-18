import React from "react";

import {
  Modal
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var ErrorModal = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <Modal
        open={context.state.error}
        title="Error"
        onClose={() => context.handleChange("error", false)}
      >
        <Modal.Section>
          <p>
            You're most likely seeing this because your Liquid code contains
            a syntax error, double-check it and try again.
          </p>
        </Modal.Section>
      </Modal>
    )}
  </EditorContext.Consumer>
);

export default ErrorModal;
