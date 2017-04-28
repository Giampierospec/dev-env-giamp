//You can import css too!, surprising.
import "./index";
//Library for formatting numbers
import numeral from "numeral";
/*eslint-disable no-console*/
const courseValue = numeral(1000).format("$0,0.00");
//string interpolation it seems.
console.log(`I would pay ${courseValue} for this awesome course!`);
