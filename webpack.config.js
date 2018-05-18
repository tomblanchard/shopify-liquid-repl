module.exports = {
  entry: [
    "./assets/index.js"
  ],
  output: {
    path: __dirname + "/assets",
    filename: "index.min.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        query: {
          presets: ["env", "react"],
          plugins: ["babel-plugin-transform-class-properties"]
        }
      }
    ]
  }
};
