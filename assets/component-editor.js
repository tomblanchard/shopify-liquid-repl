import React from "react";

import {
  Page,
  Card,
  Stack,
  FormLayout
} from "@shopify/polaris";

import EditorContext from "./component-editor-context";
import Actions from "./component-actions";
import Input from "./component-input";
import Output from "./component-output";
import ErrorModal from "./component-error-modal";
import ShareModal from "./component-share-modal";
import InfoModal from "./component-info-modal";

var Editor = (props) => (
  <EditorContext.Consumer>
    {(context) => (
      <Page title="Shopify Liquid REPL ✌️" fullWidth>
        <Card sectioned>
          <form method="post" action="/" onSubmit={context.handleSubmit}>
            <Stack vertical>
              <Actions />

              <FormLayout>
                <FormLayout.Group>
                  <Input />
                  <Output />
                </FormLayout.Group>
              </FormLayout>
            </Stack>
          </form>
        </Card>

        <ErrorModal />
        <ShareModal />
        <InfoModal />
      </Page>
    )}
  </EditorContext.Consumer>
);

export default Editor;
