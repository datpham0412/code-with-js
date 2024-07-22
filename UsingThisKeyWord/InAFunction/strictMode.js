"use strict";

function showThis() {
  console.log(this); // 'this' is undefined
}

showThis(); // Output: "undefined";
