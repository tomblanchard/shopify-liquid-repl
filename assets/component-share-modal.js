import React from "react";

import {
  Modal
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var ShareModal = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <Modal
        open={context.state.share}
        title="Share"
        onClose={() => context.handleChange("share", false)}
      >
        <Modal.Section>
          <p>
            A share-able URL has been copied to your clipboard.
          </p>
        </Modal.Section>
      </Modal>
    )}
  </EditorContext.Consumer>
);

export default ShareModal;
