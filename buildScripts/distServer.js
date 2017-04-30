//Notation in ES6 that substitutes
//var someName = require("someFile");
import express from "express";
import path from "path";
import open from "open";
import compression from "compression";
//notation in ES6 for constants.
const port = 3000;
//express declaration
const app = express();
//Gets a request from the server.
/* eslint-disable no-console */
app.use(compression());
app.use(express.static("dist"));
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
