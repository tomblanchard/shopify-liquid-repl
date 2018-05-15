import React from "react";

import {
  Modal,
  Link
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";

var InfoModal = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <Modal
        open={context.state.info}
        title="Info"
        onClose={() => context.handleChange("info", false)}
      >
        <Modal.Section>
          <p>
            Think <Link url="https://babeljs.io/repl/" external>Bable REPL</Link>, but for
            the Liquid version Shopify uses.
          </p>
        </Modal.Section>
      </Modal>
    )}
  </EditorContext.Consumer>
);

export default InfoModal;
