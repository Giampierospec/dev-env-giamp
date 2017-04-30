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

app.get("/users",function(req, res){
  //Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1, "firstName": "Bob", "lastName":"Smith", "email":"bob@gmail.com"},
    {"id": 2, "firstName": "Tammy", "lastName":"Norton", "email":"tnorton@yahoo.com"},
    {"id": 3, "firstName": "Tina", "lastName":"Lee", "email":"tina@hotmail.com"}

  ]);
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
