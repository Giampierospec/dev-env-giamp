import {
  expect
} from "chai";
//Imports jsdom library
import jsdom from "jsdom";
//Imports the filesystem library
import fs from "fs";

//Testing
describe("Our First test", function () {
  //Arrow function declaration
  it("should pass", () => {
    expect(true).to.equal(true);
  });
});

describe("index.html", () => {
  it("should say hello", (done) => {
    const index = fs.readFileSync("./src/index.html", "utf-8");
    jsdom.env(index, function (err, window) {
      const h1 = window.document.getElementsByTagName("h1")[0];
      expect(h1.innerHTML).to.equal("Hello World!");
      done();
      //Closes the window is referring to.
      window.close();
    });
  });
});
