//Notation in ES6 that substitutes
//var someName = require("someFile");
import express from "express";
import path from "path";
import open from "open";
import webpack from "webpack";
import config from "../webpack.config.dev";
//notation in ES6 for constants.
const port = 3000;
//express declaration
const app = express();
//calls thewebpack controller
const compiler = webpack(config);
//uses the middleWare for webpack to run
app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//Gets a request from the server.
/* eslint-disable no-console */
app.get("/", function (req, res) {
  //serves a file to the host
  res.sendFile(path.join(__dirname, "../src/index.html"));
});
//activates the Listen property and
//if it is successful,it launches the localhost
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
