import React, { Component } from "react";

import UrlParams from "./object-url-params";
import Clipboard from "./object-clipboard";

import EditorContext from "./component-editor-context";
import Editor from "./component-editor";

class EditorContainer extends Component {
  state = {
    input: "",
    output: "",
    loading: false,
    error: false,
    share: false,
    info: false
  };

  handleChange = (key, value, cb) => {
    this.setState({ [key]: value }, cb);
  }

  handleSubmit = (event) => {
    event && event.preventDefault();

    var url = "/";
    var data = { input: this.state.input };

    this.handleChange("loading", true);

    fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        if( !res.ok ) {
          throw new Error("Error");
        }

        return res.text();
      })
      .then((res) => {
        this.handleChange("output", res);
      })
      .catch((err) => {
        this.handleChange("error", true);
      })
      .then(() => {
        this.handleChange("loading", false);
      });
  }

  handleShare = () => {
    var input_encoded = encodeURIComponent(this.state.input);
    var url = `${window.location.origin}/?input=${input_encoded}`;

    Clipboard.copy(url);

    this.handleChange("share", true);
  }

  submitFromQueryParams = () => {
    if( UrlParams.input ) {
      this.handleChange("input", UrlParams.input, () => {
        this.handleSubmit()
      });
    }
  }

  componentDidMount = () => {
    this.submitFromQueryParams();
  }

  render() {
    return (
      <EditorContext.Provider value={{
        state: this.state,
        handleChange: this.handleChange,
        handleSubmit: this.handleSubmit,
        handleShare: this.handleShare
      }}>
        <Editor />
      </EditorContext.Provider>
    );
  }
}

export default EditorContainer;
